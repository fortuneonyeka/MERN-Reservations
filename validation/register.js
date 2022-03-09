const Validator = require("validator");
const isEmpty =  require("is-empty")

module.exports = function validateRegisterInput(data) {
  let errors = {};

  //Convert empty fields to am empty string so we can use validator functions.
  data.name = !isEmpty(data.name) ? data.name : "";
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password = !isEmpty(data.password2) ? data.password2 : "";
  data.email = !isEmpty(data.email) ? data.email : "";

  //Name check
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required"
  }

  //Email check
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required"
  }

  //Username check
  if (Validator.isEmpty(data.username)) {
    errors.username = "Username field is required"
  }

  //Password check
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required"
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Password2 field is required"
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
 
}