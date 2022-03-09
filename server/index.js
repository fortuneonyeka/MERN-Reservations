const express = require("express")
const app = express()
const mongoose = require("mongoose")
const UserModel =  require("./models/Users")
const bodyParser = require("body-parser");
// const cors = require("cors")


// app.use(cors())
// app.use(express.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
mongoose
.connect(
  "mongodb+srv://fortuneonyeka:ogubuike4@cluster0.qpbvw.mongodb.net/carsrentaldb?retryWrites=true&w=majority",
   { useNewUrlParser: true }).then(() => console.log("MongoDB successfully connected"))
   .catch(err => console.log(err));

   
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