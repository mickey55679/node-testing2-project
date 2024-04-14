const router = require("express").Router();
const {getAll, getById} = require('./recipes-model')

router.get("/", (req, res, next) => {
   getAll()
   .then(response => {
    res.json(response)
   })
});

router.get('/:id', (req, res, next) => {
    const {id} = req.params; 
    getById(id)
    .then(response => {
        res.json(response)
    })
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
