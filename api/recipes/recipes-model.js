const db = require('../../db-config');

module.exports = {
getAll,
getById,
}

function getAll() {
    return db("recipes");
}
function getById(id) {
    return db("recipes")
    .where('recipe_id', id)
}