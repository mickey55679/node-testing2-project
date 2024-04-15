const router = require("express").Router();
const { getAll, getById, add } = require("./recipes-model");
const {checkIfExists} = require('./recipes-middleware')

router.get("/", (req, res, next) => {
  getAll().then((response) => {
 res.json(response)
  })
  .catch(next)
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  getById(id).then((response) => {
    console.log(response[0]);
    res.json(response[0]);
  });
});
router.post("/", checkIfExists, (req, res, next) => {
  const recipe = req.body;
  add(recipe).then((response) => {
    res.json(response);
  });
});
router.put("/:id", (req, res, next) => {
  res.json("put");
});
router.delete("/:id", (req, res, next) => {
  res.json("deleted");
});

module.exports = router;
