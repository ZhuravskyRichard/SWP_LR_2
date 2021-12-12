const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.status(200).send(`function task(x){ return new Promise((resolve, reject) => { if (x < 13) { resolve(x) } else { reject(x) }})}`)
})

module.exports = router