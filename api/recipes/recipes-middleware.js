module.exports = {
  checkIfExists,
  validateChanges,
};

function checkIfExists(req, res, next) {
  const recipe = req.body;
  if (!recipe.name || !recipe.ingredients || !recipe.steps) {
    res
      .status(422)
      .json(
        "you must include a body of name, ingredients, and steps in this request"
      );
  } else {
    next();
  }
}
function validateChanges(req, res, next) {
  const { name, ingredients, steps } = req.body;
  if (!name || !ingredients || !steps) {
    res
      .status(422)
      .json("The changes object must include name, ingredients, and steps");
  } else {
    next();
  }
}
