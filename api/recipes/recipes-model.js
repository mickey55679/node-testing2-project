const db = require('../../db-config');

module.exports = {
getAll,
getById,
add,
}

function getAll() {
    return db("recipes");
}
function getById(id) {
    return db("recipes")
    .where('recipe_id', id)
}
async function add(recipe) {
    return db("recipes")
    .insert(recipe)
    .then(() => {
     return recipe;
    })
}