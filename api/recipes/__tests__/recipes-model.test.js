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
