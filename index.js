const express = require('express')
const app = express()
const port = process.env.port || 4000
const data = require('./Student_Data.json')
const { v4: uuidv4 } = require('uuid');
var cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  res.send(data)
})

// app.get('/allrecords',())

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})