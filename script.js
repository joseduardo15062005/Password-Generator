// Assignment code here
function generatePassword() {
  //charSets for each specific requirements
  const lowerCaseCharSets = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseCharSets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbersCharSets = "0123456789";
  const specialCharactersCharSets = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~' + "'";

  //Define the password object.
  const password = {
    finalPassword: "",
    charSet: "",
    requiredLength: "",
    includeLowerCase: false,
    includeUpperCase: false,
    includeNumbers: false,
    includeSpecialCharacters: false,
    validatePrompts: function () {
      //Validate if at least one charset is selected
      if (
        !this.includeLowerCase &&
        !this.includeUpperCase &&
        !this.includeNumbers &&
        !this.includeSpecialCharacters
      ) {
        return true;
      }
      return false;
    },
    askPasswordLength: function () {
      //Ask User from the length of the password.
      this.requiredLength = Number(
        prompt(
          "Choose a password lenght. Please add at least 8 characters and no more thant 128"
        )
      );
    },
    askIncludeLowerCase: function () {
      //ask if the user wanna include a Lowercase in the password.
      this.includeLowerCase = confirm(
        "You want to inlcuye LowerCase characters?"
      );
      //If the user want lowerCase character and the first lowercase to  the password.
      if (this.includeLowerCase) {
        this.charSet += lowerCaseCharSets;
        this.finalPassword +=
          lowerCaseCharSets[getRandomArbitrary(0, lowerCaseCharSets.length)];
      }
    },
    askIncludeUpperCase: function () {
      //ask if the user wanna include an Uppercase in the password.
      this.includeUpperCase = confirm(
        "You want to inlcuye UpperCase characters?"
      );
      //If the user want upperCase character and the first uppercase to  the password.
      if (this.includeUpperCase) {
        this.charSet += upperCaseCharSets;
        this.finalPassword +=
          upperCaseCharSets[getRandomArbitrary(0, upperCaseCharSets.length)];
      }
    },
    askIncludeNumbers: function () {
      //ask if the user wanna include a Numbers in the password.
      this.includeNumbers = confirm("You want to inlcuye Numbers characters?");
      //If the user want numbers add the first number to the password.
      if (this.includeNumbers) {
        this.charSet += numbersCharSets;
        this.finalPassword +=
          numbersCharSets[getRandomArbitrary(0, numbersCharSets.length)];
      }
    },
    askIncludeSpecialCharacters: function () {
      //ask if the user wanna include a Special Characters in the password.
      this.includeSpecialCharacters = confirm(
        "You want to inlcuye Special Characters characters?"
      );
      //If the user want Special Characters in the password, add the first special Character to the password.
      if (this.includeSpecialCharacters) {
        this.charSet += specialCharactersCharSets;
        this.finalPassword +=
          specialCharactersCharSets[
            getRandomArbitrary(0, specialCharactersCharSets.length)
          ];
      }
    },
  };
  //Get the password length from the user
  password.askPasswordLength();
  //Validate if the password lenght have the criterial between 8 and 128
  if (validatePasswordLength(8, 128, password.requiredLength)) {
    //Get from the user if we want lowercase charaters in the password
    password.askIncludeLowerCase();
    //Get from the user if we want uppercase charaters in the password
    password.askIncludeUpperCase();
    //Get from the user if we want numbers charaters in the password.
    password.askIncludeNumbers();
    //Get from the user if we want numbers charaters in the password
    password.askIncludeSpecialCharacters();
    //Validate if the user have at least one set of characters for  the password.

    if (password.validatePrompts()) {
      alert("You need select at least one option for your password.");
    } else {
      //Complete the length of the password.
      for (
        var i = password.finalPassword.length;
        i < password.requiredLength;
        i++
      ) {
        //Get a char from Password Charset and Add to the final password.
        char = password.charSet[getRandomArbitrary(0, password.charSet.length)];
        password.finalPassword += char;
      }
      console.log(password);
      return password.finalPassword;
    }
  } else {
    if (password.requiredLength < 8) {
      alert(
        "Your password lenght is too short, please select at least 8 characters."
      );
    } else if (password.requiredLength > 128) {
      alert(
        "Your password lenght is too big, please seleat no more than 128 characters."
      );
    }
  }

  return "";
}

//Generate a Random number between min and max
var getRandomArbitrary = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

//Validate Password Length Requirements
var validatePasswordLength = function (min, max, requiredLength) {
  if (requiredLength >= min && requiredLength <= max) return true;
  return false;
};

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
