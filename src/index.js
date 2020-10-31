const express = require('express')
const app = express()
const cors = require('cors')

const routes = require('./routes')
const connectDB = require('../database/db')

connectDB()


const Pokemon = require('../models/Pokemon')


app.use(cors())

app.use(express.json())
app.use(routes)


app.listen(process.env.PORT || 3000)

