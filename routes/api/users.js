const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const keys = require("../../config/keys")


//Load input validation
const validateRegisterInput =  require("../../validation/register") 
const validateLoginInput = require("../../validation/login")

//Load User model
const User = require("../../server/models/User")


// @route POST api/users/register
// @desciption Register user
// @access Public

router.post("/register", (req, res) => {
   // Form validation

   const { errors, isValid } = validateRegisterInput(req.body);

   //Check validations
   if (!isValid) {
     res.status(400).json(errors)
   }

   User.findOne({username:req.body.username}).then(user => {
     if (user) {
       res.status(400).json({username:"Username exists already"})
     }else {
       const newUser = new User({
         name: req.body.name,
         email: req.body.email,
         password: req.body.email,
         username: req.body.username,
         age: req.body.age
       })

       // Hash password before saving in database
       bcrypt.genSalt(10, (err, salt) => {
         bcrypt.hash(newUser.password, salt, (err, hash) => {
           if(err) throw err;
            newUser.password = hash;
            newUser.save.then(user => res.json(user)).catch(err => console.log(err));
         });
       });
     }
   });
});


// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
//Form Vlidation
const {errors, isValid} = validationLoginInput(req.body)

//check validation

if (!isValid) {
  return res.status(400).json(errors)
}

const email = req.body.email
const password = req.body.password
const username = req.body.username

//find user by username
User.findOne({username: req.body.username}).then(user => {
  if (!user) {
    res.status(400).json({username:"Username does not exists"})
  }

  //Chcek password
  bcrypt.compare(password, user.password).then(isMatch => {
    if (isMatch) {
      // User matched
        // Create JWT Payload
        const Payload = {
          id: user.id,
          name: user.name
        }
    }
  })
})
})