const { Router } = require('express')
const dirName = require('../dirName')
const router = Router()

router.get('/', (req, res) => res.status(200).send(process.env.SURNAME_EN))

router.get('/ru', (req, res) => res.status(200).sendFile(dirName + '/surname_ru.html'))

router.get('/by', (req, res) => res.status(200).sendFile(dirName + '/surname_by.html'))

module.exports = router