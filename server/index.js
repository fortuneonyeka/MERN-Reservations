const express = require("express")
const app = express()
const mongoose = require("mongoose")
const UserModel =  require("./models/User")
const bodyParser = require("body-parser");
const passport = require("passport")
const users = require("../routes/api/users")
// const cors = require("cors")


// app.use(cors())
// app.use(express.json())

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
.connect(
  db,
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