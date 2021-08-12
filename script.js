// Assignment code here
function generatePassword() {
  let password = "";
  let charIndex = 0;
  let char = "";
  const lowerCaseOptions = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbersOptions = "0123456789";
  const specialCharacterdsOptions = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~' + "'";
  let passwordCharactersOptions = "";

  //Get the password lenght from the user
  let passwordLenght = prompt(
    "Choose a password lenght. Please add at least 8 characters and no more thant 128"
  );

  //Validate if the password lenght have the criterial between 8 and 128
  if (passwordLenght < 8) {
    alert(
      "Your password lenght is too short, please select at least 8 characters."
    );
  } else if (passwordLenght > 128) {
    alert(
      "Your password lenght is too big, please seleat no more than 128 characters."
    );
  } else {
    //Get from the user if we wnat lowercase charaters in the password
    const includeLowerCase = confirm(
      "You want to inlcuye LowerCase characters?"
    );
    //If the user want lowerCase character and the first charater to  the password.
    if (includeLowerCase) {
      passwordCharactersOptions += lowerCaseOptions;
      charIndex = Math.floor(Math.random() * 26);
      char = lowerCaseOptions[charIndex];
      password += char;
    }
    //Get from the user if we want uppercase charaters in the password
    const includeUpperCase = confirm(
      "You want to inlcuye UpperCase characters?"
    );
    //If the user want upperCase character and the first charater to  the password.
    if (includeUpperCase) {
      passwordCharactersOptions += upperCaseOptions;
      charIndex = Math.floor(Math.random() * 26);
      char = upperCaseOptions[charIndex];
      password += char;
    }
    //Get from the user if we want numbers charaters in the password
    const includeNumbers = confirm("You want to inlcuye Numbers characters?");
    //If the user want numbers add the first number to  the password.
    if (includeNumbers) {
      passwordCharactersOptions += numbersOptions;
      charIndex = Math.floor(Math.random() * 10);
      char = numbersOptions[charIndex];
      password += char;
    }
    //Get from the user if we want numbers charaters in the password
    const includeSpecialCharacters = confirm(
      "You want to inlcuye Special Characters characters?"
    );
    //If the user want Special Characters in the password, add the first special Character to the password.
    if (includeSpecialCharacters) {
      passwordCharactersOptions += specialCharacterdsOptions;
      charIndex = Math.floor(Math.random() * 31);
      char = specialCharacterdsOptions[charIndex];
      password += char;
    }

    //Validate if the user have at least one set of characters for  the password.
    if (
      !includeLowerCase &&
      !includeUpperCase &&
      !includeNumbers &&
      !includeSpecialCharacters
    ) {
      alert("You need select at least one option for your password.");
    } else {
      for (var i = password.length; i < passwordLenght; i++) {
        //Add any of the option between 32 and 122
        charIndex = Math.floor(
          Math.random() * passwordCharactersOptions.length
        );
        char = passwordCharactersOptions[charIndex];

        password += char;
      }
      return password;
    }
  }

  return "";
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
