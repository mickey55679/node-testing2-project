const router = require("express").Router();
const {getAll} = require('./recipes-model')

router.get("/", (req, res, next) => {
   getAll()
   .then(recipes => {
    console.log(recipes)
    res.json(recipes)
   })
});

router.get('/:id', (req, res, next) => {
    res.json(':id')
})
router.post('/', (req, res, next) => {
 res.status(201).json('post')
})
router.put('/:id', (req, res, next) => {
    res.json('put')
})
router.delete('/:id', (req, res, next) => {
    res.json('deleted')
})


module.exports = router; 
