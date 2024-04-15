module.exports = {
    checkIfExists

}

function checkIfExists(req, res, next) {
    const recipe = req.body;
    if(!recipe.name || !recipe.ingredients || !recipe.steps ) {
        res.status(422).json("you must include a body of name, ingredients, and steps in this request")
    } else {
        next()
    }

}