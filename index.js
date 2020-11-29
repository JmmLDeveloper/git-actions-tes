const express = require('express')

const app = express()

app.get('/',(req,res)=>{
  res.send('semothing that is real')
})

app.get('/aaa',(req,res)=>{
  res.send('this is aaa endpoint')
})

app.get('/bbb',(req,res)=>{
  res.send('this is bbb endpoint')
})

app.get('/cd',(req,res)=>{
  res.json({continius:'deployment'})
})

app.listen(4000,()=>{
    console.log('listening on port 4000')
})