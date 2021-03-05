const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const data = require('./Student_Data.json')
const url = require('url')
const querystring = require('querystring');
const { v4: uuidv4 } = require('uuid');
var cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  res.send(uuidData)
})

app.get('/allrecords',(req,res)=>{
  let uuidData = data.map(i=>{
       return{
         ...i,
         Id: uuidv4()
       }
    })
    res.send(uuidData)
})

let uuidData = data.map(i=>{
  return{
    ...i,
    Id: uuidv4()
  }
});


app.get('/recordsdetails/:id',(req,res)=>{
  var id = req.params.id;
  console.log(id);
   res.send(uuidData.filter(i=>id === i.Id));
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})