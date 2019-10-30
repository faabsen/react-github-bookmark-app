require('dotenv').config()
const express = require('express')
const app = express()

const routes = require('./src/routes/routes')

app.use(routes)

app.listen(process.env.NODE_PORT, () => {
    console.log('Server is up on: ' + process.env.NODE_HOST + ':' + process.env.NODE_PORT)
})