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
    askIncludeLowerCase: function () {
      this.includeLowerCase = confirm(
        "You want to inlcuye LowerCase characters?"
      );
      //If the user want lowerCase character and the first charater to  the password.
      if (this.includeLowerCase) {
        this.charSet += lowerCaseCharSets;
        const charIndex = getRandomArbitrary(0, lowerCaseCharSets.length);
        this.finalPassword += lowerCaseCharSets[charIndex];
      }
    },
    askIncludeUpperCase: function () {
      this.includeUpperCase = confirm(
        "You want to inlcuye UpperCase characters?"
      );
      //If the user want upperCase character and the first charater to  the password.
      if (this.includeUpperCase) {
        this.charSet += upperCaseCharSets;
        const charIndex = getRandomArbitrary(0, upperCaseCharSets.length);
        this.finalPassword += upperCaseCharSets[charIndex];
      }
    },
    askIncludeNumbers: function () {
      this.includeNumbers = confirm("You want to inlcuye Numbers characters?");
      //If the user want numbers add the first number to  the password.
      if (this.includeNumbers) {
        this.charSet += numbersCharSets;
        charIndex = getRandomArbitrary(0, numbersCharSets.length);
        this.finalPassword += numbersCharSets[charIndex];
      }
    },
    askIncludeSpecialCharacters: function () {
      this.includeSpecialCharacters = confirm(
        "You want to inlcuye Special Characters characters?"
      );
      //If the user want Special Characters in the password, add the first special Character to the password.
      if (this.includeSpecialCharacters) {
        this.charSet += specialCharactersCharSets;
        charIndex = getRandomArbitrary(0, specialCharactersCharSets.length);
        this.finalPassword += specialCharactersCharSets[charIndex];
      }
    },
  };

  //Get the password lenght from the user
  password.requiredLength = prompt(
    "Choose a password lenght. Please add at least 8 characters and no more thant 128"
  );

  //Validate if the password lenght have the criterial between 8 and 128
  if (password.requiredLength < 8 || password.requiredLength > 128) {
    if (password.requiredLength < 8) {
      alert(
        "Your password lenght is too short, please select at least 8 characters."
      );
    } else if (password.requiredLength > 128) {
      alert(
        "Your password lenght is too big, please seleat no more than 128 characters."
      );
    }
  } else {
    //Get from the user if we wnat lowercase charaters in the password
    password.askIncludeLowerCase();
    //Get from the user if we want uppercase charaters in the password
    password.askIncludeUpperCase();
    //Get from the user if we want numbers charaters in the password.
    password.askIncludeNumbers();

    //Get from the user if we want numbers charaters in the password
    password.askIncludeSpecialCharacters();
    //Validate if the user have at least one set of characters for  the password.
    if (
      !password.includeLowerCase &&
      !password.includeUpperCase &&
      !password.includeNumbers &&
      !password.includeSpecialCharacters
    ) {
      alert("You need select at least one option for your password.");
    } else {
      //Add the rest of the charcters to the password.
      for (
        var i = password.finalPassword.length;
        i < password.requiredLength;
        i++
      ) {
        //Add any of the option between 32 and 122
        charIndex = Math.floor(Math.random() * password.charSet.length);
        char = password.charSet[charIndex];

        password.finalPassword += char;
      }
      console.log(password);
      return password.finalPassword;
    }
  }

  return "";
}

//Generate a Random number between min and max
var getRandomArbitrary = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
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
