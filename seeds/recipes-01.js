const cleaner = require("knex-cleaner");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return cleaner
    .clean(knex, {
      mode: "truncate", //resets ids
      ignoreTables: ["knex_migrations", "knex_migrations_lock"],
    })
    .then(function () {
      return knex("recipes").insert([
        {
          name: "Pizza",
          ingredients: "Dough, Tomato Sauce, Cheese",
          steps: "Knead dough, Spread sauce, Add cheese, Bake in oven",
        },
        {
          name: "Pasta",
          ingredients: "Pasta, Tomato Sauce",
          steps: "Boil pasta, Heat sauce, Combine pasta and sauce",
        },
        // Add more recipes as needed
      ]);
    });
};
