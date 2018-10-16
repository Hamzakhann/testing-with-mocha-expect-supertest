const express = require('express')

const app = express();

app.get('/' , (req , res) =>{
  res.status(200).send({name : "hamza" , age:22})
})


app.get('/users' , (req , res) =>{
  res.send([
    {
      name : "hamza",
      age : 22
    },
    {
      name : "areeba",
      age : 23
    }
  ])
})


app.listen(3000)
module.exports = app