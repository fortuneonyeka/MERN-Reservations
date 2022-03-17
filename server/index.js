const express = require("express")
const app = express()
const mongoose = require("mongoose")
const UserModel =  require("./models/User")
const bodyParser = require("body-parser");
const passport = require("passport-jwt")
const users = require("../routes/api/users")


// const cors = require("cors")


// app.use(cors())
app.use(express.json())


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


   // Passport middleware
   app.use(passport.initialize())

   //passport config
   require("../config/passport")(passport)

   //Routes
   app.use("/api/users", users);
   
// app.get("/getUser", (req, res)=> {
//   UserModel.find({}, (err, result) => {
//     if (err) {
//       res.json(err)
//     }else{
//       res.json(result)
//     }
//   })
// })


const port = process.env.PORT || 3001;
app.listen(port, ()=> {
  console.log(`Server is running successfully @ ${port}`)
})
// app.listen(3001, () => {
//   console.log(" THE SERVER IS RUNNING PERFECTLY");
// })