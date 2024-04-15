const request = require("supertest");
const server = require("../../server");

describe("recipes-router.js", () => {
  describe("[Get] /", () => {
    it("should return an OK status code from the get route", async () => {
      const expectedStatusCode = 200;
      const response = await request(server).get("/api/recipes");
      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return the expected recipes", async () => {
      const response = await request(server).get("/api/recipes");
      expect(response.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            recipe_id: expect.any(Number),
            name: expect.any(String),
            ingredients: expect.any(String),
            steps: expect.any(String),
          }),
        ])
      );
    });
  });

  describe("[Get] /:id", () => {
    it("should get a particular resource with a specific id ", async () => {
      const id = 1;
      const res = await request(server).get(`/api/recipes/${id}`);
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("recipe_id", id);
    });
  });

  describe("[Post] /", () => {
    it("should return a status code of 201 and the created recipe", async () => {
      const newRecipe = {
        name: "test recipe",
        ingredients: "test ingredients",
        steps: "test steps",
      };

      const expectedStatusCode = 201;
      const response = await request(server)
        .post("/api/recipes")
        .send(newRecipe);
      expect(response.status).toEqual(expectedStatusCode);
      expect(response.body).toMatchObject(newRecipe);
    });
  });
  describe("[put] /:id", () => {
     it("should update a particular resource with a specific id ", async () => {
    const id = 1; 
    const changes = { 
        name: "Updated recipe",
        ingredients: "Updated Ingredients",
        steps: "Updated steps"
     }; 

    const res = await request(server).put(`/api/recipes/${id}`).send(changes);

    expect(res.status).toBe(201);
    expect(res.body[0]).toHaveProperty('name', changes.name);
  });

});
describe("[Delete] /:id", () => {
  it("should delete a particular resource with a specific id ", async () => {
    const id = 1; 

    const res = await request(server).delete(`/api/recipes/${id}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty(
      "message",
      `The recipe with id ${id} was deleted`
    );
  });
});
  });
