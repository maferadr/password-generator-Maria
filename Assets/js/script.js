//Assign global variables to work through the functions.

var lowerCase = "asdfghjklqwertyuiopzxcvbnm";
var upperCase = "ASDFGHJKLQWERTYUIOPZXCVBNM";
var numericValues = "0123456789";
var specialCharacters = ".?,;-_¡!¿*%&$/()[]{}|@><";

//The letters and length variables start empty (As a number and string value) to start building it trhough conditionals
var letters = "";
var length = 0;

//Prompt function in which the user can choose the criteria they want to apply on the password.
var promptCriteria = () =>{
  // alert("Your password must contains at least 8 characters and NO more than 128.")
  length = prompt("How long do you want the password characters be? It must contains at least 8 characters and NO more than 128.")
  length = parseInt(length)
  if(length < 8 || length > 128 || Number.isNaN(length)){ //if they pick a bad answer
    alert("Your numbers of characters don't meet the requirements. Try again")
    return promptCriteria() //the function would start again
  }
  //If they do pick a good answer, then the conditionals would start running

  var lowerLetter = confirm("Do you want to use Lowercase Letters?")
  if(lowerLetter) letters += lowerCase;

  var capitalLetters = confirm("Do you want to use Capital Letters?");
  if(capitalLetters) letters += upperCase;

  var numbersConfirm = confirm("Do you want to include numbers?")
  if(numbersConfirm) letters += numericValues;

  var symbolsConfirm = confirm("Do you want to include Special Characters?")
  if(symbolsConfirm) letters += specialCharacters;
}

//GeneratePassword function to random build a password for the user.
var generatePassword = () =>{ 
  promptCriteria()

  var password = "";
    for(var i = 0; i < length; i++){
      var randomGenerate = Math.floor(Math.random() * letters.length);
      password += letters.charAt(randomGenerate);
    }
    return password;
  }
  
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
