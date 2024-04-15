const db = require("../../db-config");

module.exports = {
  getAll,
  getById,
  add,
  update,
  remove,
};

function getAll() {
  return db("recipes");
}
function getById(id) {
  return db("recipes").where("recipe_id", id);
}
async function add(recipe) {
  return db("recipes")
    .insert(recipe)
    .then(() => {
      return recipe;
    });
}
async function update(id, changes) {
  return db("recipes")
    .where("recipe_id", id)
    .update(changes)
    .then(() => {
      return getById(id);
    });
}
function remove(id) {
  return db("recipes").where("recipe_id", id)
  .del();
}
