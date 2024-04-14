
exports.up = function(knex) {
  return knex.schema.createTable("recipes", tbl => {
    tbl.increments('recipe_id')
    tbl.string('name')
    tbl.text('ingredients')
    tbl.text('steps')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('recipes')
};
