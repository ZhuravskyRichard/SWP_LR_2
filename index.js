const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const dirName = require('./dirName')

dotenv.config()

const PORT = process.env.PORT || 8003

const app = express()

app.use(express.static(dirName + '/pages'))
app.use(express.json())
app.use(cors({
    origin: '*'
}))

app.use('/login', require('./routes/loginRoutes'))
app.use('/env', require('./routes/envRoutes'))
app.use('/promise', require('./routes/promiseRoutes'))
app.use('/fetch', require('./routes/fetchRoutes'))

app.get('*', (req, res) => {
    res.sendFile(dirName + '/notFound.html')
})

app.listen(PORT, () => console.log(`Server start on PORT ${PORT}...`))