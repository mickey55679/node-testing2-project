const router = require("express").Router();

router.get("/", (req, res, next) => {
    res.json("hi")
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
