const express = require("express");
const recipeRouter = require("./recipes/recipes-router")

const server = express();

server.use(express.json());

server.use('/api/recipes', recipeRouter);


server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(`Internal Server Error: ${err.message}`)
})


module.exports = server;
