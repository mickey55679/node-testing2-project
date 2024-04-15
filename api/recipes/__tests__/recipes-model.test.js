const Recipe = require("../recipes-model");
const db = require("../../../db-config");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});

afterAll(async () => {
  await db.destroy();
});

test("environment is testing", () => {
  expect(process.env.NODE_ENV).toBe("testing");
});
describe("getAll", () => {
  it("should retrieve all recipes from db", async () => {
    const recipes = await Recipe.getAll();

    expect(Array.isArray(recipes)).toBe(true);
    expect(recipes.length).toBe(2);

    recipes.forEach((recipe) => {
      expect(recipe).toHaveProperty("name");
      expect(recipe).toHaveProperty("ingredients");
      expect(recipe).toHaveProperty("steps");
    });
  });
});
describe("getById", () => {
  it("should retrieve a single recipe from the db with that id", async () => {
    const allRecipes = await Recipe.getAll();
    const recipeId = allRecipes[0].recipe_id;

    const fetchedRecipe = await Recipe.getById(recipeId);

    expect(fetchedRecipe[0]).toHaveProperty("recipe_id", recipeId);
  });
});
describe("add", () => {
  it("should insert a new recipe into the database", async () => {
    // Arrange
    const newRecipe = {
      name: "pasta",
      ingredients: "noodles",
      steps: "boil water",
    };
    //Act
    const addedRecipe = await Recipe.add(newRecipe);
    //Assert
    expect(addedRecipe).toEqual(newRecipe);
  });
});
describe("update", () => {
  it("should update the database with a new recipe", async () => {
    //Arrange
    const newRecipe = {
      name: "pasta",
      ingredients: "noodles",
      steps: "boil water",
    };
    const changes = { name: "spaghetti", ingredients: "speghetti noodles", steps: "boil water" };
   // Add a recipe to the database
    const [id] = await db('recipes').insert(newRecipe);
  // Act
  await Recipe.update(id, changes);

  //Assert
  const updatedRecipe = await db("recipes").where("recipe_id", id).first();
  expect(updatedRecipe.name).toEqual(changes.name);
  });
});

describe("remove", () => {
  it("should remove a recipe from the database", async () => {
 //Arrange
 const newRecipe = {name: "pasta", ingredients: "noodles", steps: "boil water"};
 //Add a recipe to the database
 const [recipe_id] = await db("recipes").insert(newRecipe)

 //Act 
 await Recipe.remove(recipe_id);

 //Assert
 const recipes = await db("recipes");
 expect(recipes).toHaveLength(2);
  })
})
