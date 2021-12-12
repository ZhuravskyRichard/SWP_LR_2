const { Router } = require('express')
const dirName = require('../dirName')
const router = Router()

router.get('/', (req, res) => {
    res.status(200).sendFile(dirName + '/fetch.html')
})

module.exports = router