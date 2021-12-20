// Assignment code here

var alpha = "abcdefghijklmnopqrstuvwxyz";
var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789";
var symbols = "!@#$%^&*()";


function generatePassword() {

  var length = prompt("Please type a length between 8 and 128");
  var isLowerCase = window.confirm("Would you like to include lowercase letters?");
  var isUpperCase = window.confirm("Would you like to include uppercase letters?");
  var isNumeric = window.confirm("Would you like to include numeric values?");
  var isSymb = window.confirm("Would you like to include special characters?");

  var randomLower = "";
  var randomUper = "";
  var randomNum = "";
  var randomSymb = "";
  var setPsswd = "";
  var randomPsswd = "";

  for (var i = 0; i < length; i++) {
    randomLower += alpha.charAt(Math.floor(Math.random() * alpha.length));
    randomUper += upperAlpha.charAt(Math.floor(Math.random() * upperAlpha.length));
    randomNum += numbers.charAt(Math.floor(Math.random() * numbers.length));
    randomSymb += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }

  ///Else if for 3 positive options
  if (isLowerCase === true && isUpperCase === true && isNumeric === true && isSymb === true) {
    setPsswd += randomLower + randomUper + randomNum + randomSymb;

  } else if (isLowerCase === true && isUpperCase === true && isNumeric === true) {
    setPsswd += randomLower + randomUper + randomNum;

  } else if (isLowerCase === true && isUpperCase === true && isSymb === true) {
    setPsswd += randomLower + randomUper + randomSymb;

  } else if (isLowerCase === true && isNumeric === true && isSymb === true) {
    setPsswd += randomLower + randomSymb + randomNum;

  } else if (isUpperCase === true && isNumeric === true && isSymb === true) {
    setPsswd += randomUper + randomSymb + randomNum;

  }
  ///Else if for 2 positive options

  else if (isLowerCase === true && isUpperCase === true) {
    setPsswd += randomLower + randomUper;

  } else if (isNumeric === true && isSymb === true) {
    setPsswd += randomSymb + randomNum;

  } else if (isLowerCase === true && isNumeric === true) {
    setPsswd += randomLower + randomNum;

  } else if (isLowerCase === true && isSymb === true) {
    setPsswd += randomLower + randomSymb;

  } else if (isUpperCase === true && isNumeric === true) {
    setPsswd += randomUper + randomNum;

  } else if (isUpperCase === true && isSymb === true) {
    setPsswd += randomUper + randomSymb;

  }
  ///Else if for 1 positive options

  else if (isLowerCase === true) {
    setPsswd += randomLower;

  } else if (isUpperCase === true) {
    setPsswd += randomUper;

  } else if (isNumeric === true) {
    setPsswd += randomNum;

  } else if (isSymb === true) {
    setPsswd += randomSymb;

  }

  for (var j = 0; j < length; j++) {
    randomPsswd += setPsswd.charAt(Math.floor(Math.random() * setPsswd.length))
  }

  return randomPsswd;

}

// references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
