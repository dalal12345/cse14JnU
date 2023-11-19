const express = require('express');
const app = express()
const fs = require('fs')
const page = fs.readFileSync(__dirname + '/index.html','utf-8')
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('Hello from express')
})


app.listen(PORT,(err)=>{
   if (err) throw err;
   else console.log(`Server started at port ${PORT}`);
})