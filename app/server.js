const express = require('express')
const router = require('./routes')

const app = express()

app.set('view engine', 'ejs')
app.set('views', __dirname + '/../public/views')

app.use(express.static(__dirname + '/../public'))

require('./database.js')
router(app)


module.exports = app;