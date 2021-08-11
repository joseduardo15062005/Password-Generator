// Assignment code here
function generatePassword(passwordLenght) {
  let password = "";

  for (var i = 0; i < passwordLenght; i++) {
    //TODO: Create a random number
    //Special Characters from 32 to 47 add at least 1

    //Numbers from 48 to 57 add at least 1

    //Uppercase from  65 to 90  at least 1
    //Lowercase letter from  97 to 122  at Least 1s
    const code = getRandomArbitrary(32, 122);

    const char = String.fromCharCode(code);

    password += char;
  }

  return password;
}

//Generate a Random number between min and max
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(16);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
