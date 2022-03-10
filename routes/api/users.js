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

   User.findOne({email:req.body.email}).then(user => {
     if (user) {
       res.status(400).json({email:"Email exists already"})
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