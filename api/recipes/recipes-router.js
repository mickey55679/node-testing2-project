const router = require("express").Router();
const { getAll, getById, add, update, remove} = require("./recipes-model");
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
  })
  .catch(next)
});
router.post("/", checkIfExists, (req, res, next) => {
  const recipe = req.body;
  add(recipe).then((response) => {
    res.json(response);
  })
  .catch(next)
});
router.put("/:id", (req, res, next) => {
 const {id} = req.params; 
 const changes = req.body;
 console.log(id, changes);
 update(id, changes)
 .then(response => {
    res.json(response)
 })
 .catch(next)
 
});
router.delete("/:id", (req, res, next) => {
  const {id} = req.params;
  remove(id)
    .then((count) => {
      if (count > 0) {
        res.json({ message: `The recipe with id ${id} was deleted` });
      }
    })
    .catch(next);
});

module.exports = router;
