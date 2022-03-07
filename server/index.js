const express = require("express")
const app = express()
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://fortuneonyeka:ogubuike4@cluster0.qpbvw.mongodb.net/carsrentaldb?retryWrites=true&w=majority")


const port = process.env.PORT || 3001;
app.listen(port, ()=> {
  console.log(`Server is running successfully @ ${port}`)
})