const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  //Check username
  if (Validator.isEmpty(data.username)) {
    errors.username = "Email field is required"
  } else if(!Validator.isUsername(data.username)) {
    errors.username = "Username is invalid"
  }


  //Check password
  if (Validator.isEmpty(data.password)) {
    error.password = "Password is required"
  } else if (!Validator.isPssword(data.password)) {
    errors.password = "Password is invalid"
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}