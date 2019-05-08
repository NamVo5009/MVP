const express = require('express');
const app = express();
const path = require('path')
const DIST_DIR = path.join(__dirname, '../dist/');
const bodyParser =require ('body-parser');
const db = require('../db/index.js')

app.use(express.static(DIST_DIR))
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.use('/api/allProfiles', (req,res) => {
  db.getAll((data)=>{
    res.json(data);
  })
})

app.use('/api/newProfile', (req,res)=> {
  console.log(req.body)
  db.saveProfile(req.body,(data)=> {
    console.log(data)
  })
})

const port = 9000;

app.listen(port, ()=> {
  console.log(`Listening to port ${port}`)
})
