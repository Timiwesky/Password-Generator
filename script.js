// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var passwordArrays = {
  
  isSpecialChar: specialCharacters.slice(),
  isNumeric: numericCharacters.slice(),
  isLowerCase: lowerCasedCharacters.slice(),
  isUpperCase: upperCasedCharacters.slice(),
  

};


// Function to prompt user for password options
// Prompt for password length between 8 and 128
function getPasswordLength() {

  var passwordLength = parseInt(prompt("Choose a length of numbers between 8 and 128 characters"));

  if  (isNaN(passwordLength)  ||  (passwordLength < 8 ||  passwordLength > 128)) {
    alert ("Please enter number between 8 and 128 characters")
    return getPasswordLength()
  }
  else {
  return passwordLength;
}}
  
// var passwordLength = getPasswordLength()

// prompt for user character types

function getPasswordOptions() {
  // let passwordLength = getPasswordLength()
  var isLowerCase = confirm("contain lowercase characters?");
  var isUpperCase = confirm("contain Uppercase characters?");
  var isNumeric = confirm("contain numeric characters?");
  var isSpecialChar = confirm("contain special characters?" );

  if (!isLowerCase && !isUpperCase && !isNumeric && !isSpecialChar) {
    alert("Please select at least one option for the password");
    return getPasswordOptions();
  }


  var userOptions = [
    // { key: 'passwordLength', value: passwordLength },
    { key: 'isLowerCase', value: isLowerCase },
    { key: 'isUpperCase', value: isUpperCase },
    { key: 'isNumbers', value: isNumeric },
    { key: 'isSpecialChar', value: isSpecialChar }
  ];
  // console.log(typeof userOptions, userOptions)
  return userOptions
}


// Function for getting a random element from an array
Array.prototype.getRandom = function(){
  return this[Math.floor(Math.random()*this.length)];
}

// Function to generate password with user input
 function generatePassword() {
  
  var passwordLength = getPasswordLength()
  var userOptions = getPasswordOptions();
  var filteredChoices = userOptions.filter((userOption) => userOption.value);


// Arrays with selected character sets
  var selectedCharSets = filteredChoices.map((choice) => passwordArrays[choice.key]);
  // console.log('selected char sets',selectedCharSets)


// merged the results to one array that contains all selected by the user chars that can be include in the password
  var merged = selectedCharSets.flat(1)
  // console.log(merged)

  
  let password=''
for (let i = 0; i < passwordLength; i++) {
  var chars = merged.getRandom();

  password += chars;
}
  console.log('password',password)
  return password
  


}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
