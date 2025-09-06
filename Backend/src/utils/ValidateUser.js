//API level validation

const validator = require("validator");


function ValidateUser(user) {
  const mandatoryFields = ["name", "age", "gender", "email", "password"];

  const isAllowed = mandatoryFields.every((e) => Object.keys(user).includes(e));
  if (!isAllowed) throw new Error("mandatory fields are missing");

  if (user.name.length < 3 && user.name.length > 20)
    throw new Error("name must be greater than length 3 and less than length");

  if (user.age < 18) throw new Error("You're not 18+, not allowed!");
  if (user.age > 60) throw new Error("You're 60+, not allowed!");


    if (!["male", "female", "others"].includes(user.gender))
      throw new Error("Invalid gender");

  if (!validator.isEmail(user.email)) throw new Error("not valid email");

  if (!validator.isStrongPassword(user.password))
    throw new Error("weak password");
}

module.exports = ValidateUser;

//["name", "age", "gender", "email", "password"].every(e=>["name","email","password"].includes(e)) -> false -> this is not work as like we expect
//["name","email","password"].every(e=>["name", "age", "gender", "email", "password"].includes(e)) -> true -> this is right 