const express = require("express")
const app = express()
const mongoose = require("mongoose")
const UserModel =  require("./models/Users")
// const cors = require("cors")


// app.use(cors())
// app.use(express.json())
mongoose.connect("mongodb+srv://fortuneonyeka:ogubuike4@cluster0.qpbvw.mongodb.net/carsrentaldb?retryWrites=true&w=majority")

app.get("/getUser", (req, res)=> {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err)
    }else{
      res.json(result)
    }
  })
})


// const port = process.env.PORT || 3001;
// app.listen(port, ()=> {
//   console.log(`Server is running successfully @ ${port}`)
// })
app.listen(3001, () => {
  console.log(" THE SERVER IS RUNNING PERFECTLY");
})