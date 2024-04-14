const db = require('../../db-config');

module.exports = {
getAll,
}

function getAll() {
    return db("recipes");
}
// function getById(id) {
//   return db("recipes").where("id", id).first();
// }
// async function insert(recipe) {
//   return await db("recipes")
//     .insert(recipe)
//     .then(([id]) => {
//       return db("recipe").where("id", id).first();
//     });
// }

// async function update(id, changes) {
//   return null;
// }

// function remove(id) {
//   return null;
// }