const express = require('express')
const app = express()
const port = process.env.PORT || 4000
var cors = require('cors')
var path = require('path');
var bodyParser = require('body-parser')
app.use(bodyParser.json())
require('dotenv').config()
const routes = require('./routes/v1');
app.use(cors())

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log('mongodb connected');
});

app.use('/v1', routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


// let uuidData = data.map(i=>{
//   return{
//     ...i,
//     Id: uuidv4()
//   }
// });

// app.get('/recordsdetails/:id',(req,res)=>{
//   // console.log('indetails')
// try{
//   var id = req.params.id;
//   // console.log(id);
//   // console.log(uuidData.filter(i=>id === i.Id),'UUID Data')
//    res.send(uuidData.filter(i=>id === i.Id));
// }catch(error){
//   console.log('error: '+error)
// }

// })

// app.get('/allrecords',(req,res)=>{
//     res.send(uuidData)
// })

// app.get('/records', (req, res) => {
//   res.send(data)
// })

// app.get('/dummyroute',(req,res)=>{
//   if(process.env.NODE_ENV === 'production'){
//   res.send(process.env.Kinjal_pm)
//   }else{
//   res.send('some dummy key in local')
//   }
// })


// app.post('/newrecord',(req,res)=>{
//   console.log(req.body)
//   let obj = {
//     ...req.body,
//     Id:uuidv4()
//   }
//   console.log(obj)
//   uuidData.push(obj)
//   res.send('found')
//   console.log(uuidData.length)

// })
// app.get('/',(req,res)=>{
//   res.sendFile('index.html', {root: __dirname })
// })