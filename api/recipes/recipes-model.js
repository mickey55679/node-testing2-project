const db = require('../../db-config');

module.exports = {
getAll,
}

function getAll() {
    return db("recipes");
}
