const Recipe = require("./recipes-model");
const db = require("../../db-config");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});

afterAll(async () => {
  // Add this block
  await db.destroy();
});

test("environment is testing", () => {
  expect(process.env.NODE_ENV).toBe("testing");
});
