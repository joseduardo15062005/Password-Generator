// Assignment code here
function generatePassword() {
  //charSets for each specific requirements
  const lowerCaseOptions = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbersOptions = "0123456789";
  const specialCharacterdsOptions = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~' + "'";

  const password = {
    finalPassword: "",
    charSet: "",
    requiredLength: "",
    includeLowerCase: false,
    includeUpperCase: false,
    includeNumbers: false,
    includeSpecialCharacters: false,
  };

  let charIndex = 0;
  let char = "";

  //Get the password lenght from the user
  password.requiredLength = prompt(
    "Choose a password lenght. Please add at least 8 characters and no more thant 128"
  );

  //Validate if the password lenght have the criterial between 8 and 128
  if (password.requiredLength < 8) {
    alert(
      "Your password lenght is too short, please select at least 8 characters."
    );
  } else if (password.requiredLength > 128) {
    alert(
      "Your password lenght is too big, please seleat no more than 128 characters."
    );
  } else {
    //Get from the user if we wnat lowercase charaters in the password
    password.includeLowerCase = confirm(
      "You want to inlcuye LowerCase characters?"
    );
    //If the user want lowerCase character and the first charater to  the password.
    if (password.includeLowerCase) {
      password.charSet += lowerCaseOptions;
      charIndex = getRandomArbitrary(0, 26);
      char = lowerCaseOptions[charIndex];
      password.finalPassword += char;
      console.log(charIndex);
    }
    //Get from the user if we want uppercase charaters in the password
    password.includeUpperCase = confirm(
      "You want to inlcuye UpperCase characters?"
    );
    //If the user want upperCase character and the first charater to  the password.
    if (password.includeUpperCase) {
      password.charSet += upperCaseOptions;
      charIndex = getRandomArbitrary(0, 26);
      char = upperCaseOptions[charIndex];
      password.finalPassword += char;
    }
    //Get from the user if we want numbers charaters in the password
    password.includeNumbers = confirm(
      "You want to inlcuye Numbers characters?"
    );
    //If the user want numbers add the first number to  the password.
    if (password.includeNumbers) {
      password.charSet += numbersOptions;
      charIndex = getRandomArbitrary(0, 10);
      char = numbersOptions[charIndex];
      password.finalPassword += char;
    }
    //Get from the user if we want numbers charaters in the password
    password.includeSpecialCharacters = confirm(
      "You want to inlcuye Special Characters characters?"
    );
    //If the user want Special Characters in the password, add the first special Character to the password.
    if (password.includeSpecialCharacters) {
      password.charSet += specialCharacterdsOptions;
      charIndex = getRandomArbitrary(0, 31);
      char = specialCharacterdsOptions[charIndex];
      password.finalPassword += char;
    }

    //Validate if the user have at least one set of characters for  the password.
    if (
      !password.includeLowerCase &&
      !password.includeUpperCase &&
      !password.includeNumbers &&
      !password.includeSpecialCharacters
    ) {
      alert("You need select at least one option for your password.");
    } else {
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
