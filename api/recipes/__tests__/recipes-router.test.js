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
  describe("recipes-router.js", () => {
    describe("[Post] /", () => {
      it("should return a status code of 201 and the created recipe", async () => {
        const newRecipe = {
          name: "test recipe",
          ingredients: "test ingredients",
          steps: "test steps",
        };

        const expectedStatusCode = 201;
        const response = await request(server).post("/api/recipes").send(newRecipe)

        expect(response.status).toEqual(expectedStatusCode);
        expect(response.body).toMatchObject(newRecipe);
      });
    });
  });
});
