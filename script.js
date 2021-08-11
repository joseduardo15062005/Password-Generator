// Assignment code here
function generatePassword() {
  let password = "";

  let passwordLenght = prompt(
    "Choose a password lenght. Please add at least 8 characters and no more thant 128"
  );

  if (passwordLenght < 8) {
    alert(
      "Your password lenght is too short, please select at least 8 characters."
    );
    return;
  } else if (passwordLenght > 128) {
    alert(
      "Your password lenght is too big, please seleat no more than 128 characters."
    );
    return;
  }

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
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
