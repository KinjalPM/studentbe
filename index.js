const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const data = require('./Student_Data.json')
const url = require('url')
const querystring = require('querystring');
const { v4: uuidv4 } = require('uuid');
var cors = require('cors')
app.use(cors())

let uuidData = data.map(i=>{
  return{
    ...i,
    Id: uuidv4()
  }
});

app.get('/recordsdetails/:id',(req,res)=>{
  console.log('indetails')
  var id = req.params.id;
  console.log(id);
  console.log(uuidData.filter(i=>id === i.Id),'UUID Data')
   res.send(uuidData.filter(i=>id === i.Id));
})

app.get('/allrecords',(req,res)=>{
    res.send(uuidData)
})

app.get('/records', (req, res) => {
  res.send(data)
})

app.get('/dummyroute',(req,res)=>{
  if(process.env.NODE_ENV === 'production'){
  res.send(process.env.Kinjal_pm)
  }else{
  res.send('some dummy key in local')
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/',(req,res)=>{
  res.sendFile('index.html', {root: __dirname })
})