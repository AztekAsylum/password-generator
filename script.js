//VARIABLE DECLARATIONS
// a prompt for how many chars they want
var specialChars = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "+",
  "_",
  "-",
  "=",
  "~",
  "<",
  ">",
  "?",
];
//["+", "$", "~"];
var numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercaseChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercaseChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//storing a reference to the button Generate Password
var generateBtn = document.querySelector("#generate");

function random(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);

  var randomChar = arr[randomIndex];

  console.log("logged: " + randomChar);
  return randomChar;
}

random(specialChars);
random(numericChars);
random(lowercaseChars);
random(uppercaseChars);

//FUNCTIONS
// var userOptions = undefined;
function generatePassword() {
  // capture user length for password
  var userCharsLength = prompt(
    "How many characters would you like your password to contain?"
  );
  if (userCharsLength < 8 || userCharsLength > 128) {
    prompt(" Password must between 8-128 characters");
  }
  // got users input on characters
  var specialCharacters = confirm(
    "Click OK to confirm including special characters"
  );
  var numericCharacters = confirm(
    "Click OK to confirm including numeric characters"
  );
  var lowerCaseCharacters = confirm(
    "Click OK to confirm including lowerCase characters"
  );
  var upperCaseCharacters = confirm(
    "Click OK to confirm including upperCase characters"
  );
  //created an object for userOptions
  var userOptions = {
    length: userCharsLength,
    willHaveSpecChars: specialCharacters,
    willHaveNumericChars: numericCharacters,
    willHaveLowChars: lowerCaseCharacters,
    willHaveUppChars: upperCaseCharacters,
  };

  if (userOptions.willHaveSpecChars) {
    console.log("result", result);

    result = result.concat(specialChars);
    // lets randomly grab a memeber value from the special characters array
    // push into result array
  }
  if (userOptions.willHaveNumericChars) {
    console.log("result", result);

    result = result.concat(numericChars);
    // lets randomly grab a memeber from the nums array
    // push into result array
    //works*
  }
  if (userOptions.willHaveLowChars) {
    console.log("result", result);

    result = result.concat(lowercaseChars);
    // lets randomly grab a memeber from the lowerCase array
    // push into result array
  }
  if (userOptions.willHaveUppChars) {
    console.log("result", result);

    result = result.concat(uppercaseChars);
    // lets randomly grab a memeber from the upperCase array
    // push into result array
  }

  var newpw = "";
  for (var i = 0; i < userOptions.length; i++) {
    newpw = newpw + random(result); // left off
  }

  // newpw = newpw + random(result);
  return newpw;
}

// got users input on confirms
// eventually this array will store random generated password. i will use push mehtod to add to this arry, and this is what i will return to the user
var result = [];
console.log(result);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); // storing a refrence to the text area element

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
