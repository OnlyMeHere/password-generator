

const lowerc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","w","X","Y","Z"]
const numbers = ["1","2","3","4","5","6","6","7","8","9","0"]
const special = ["!","#","$","%","^","&","*","(",")","_","-","?"]
var finalPassGen = [];
var password = 0;
var inputChar = 0;



// Assignment Code

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", userInput);

// Write password to the #password input

function writePassword() {
     password = generatePassword();
 var passwordText = document.querySelector("#password");
 passwordText.value = password;
}

function userInput() {
  var inputChar = prompt("How may characture would you like in your password?");
  if (inputChar >= 8 && inputChar <= 127) {
    generatePassword();
  } else {
    alert("Please enter a Minimum of 8 charactures with a Maximum of 128 charactures");
  }
}


function generatePassword() {
  var lwrcase = confirm("use lower case letters in your password?");
  if (lwrcase === true) {
    finalPassGen = finalPassGen + lowerc;
  }else {
    finalPassGen = finalPassGen
  }
  var uprcase = confirm("Use upper case letters in your password?");
  if (uprcase === true) {
    finalPassGen = finalPassGen + upperc;
  }else {
    finalPassGen = finalPassGen;
  }
  var numcase = confirm("Use numaric values in your password?");
  if (numcase === true) {
    finalPassGen = finalPassGen + numbers;
  }else {
    finalPassGen = finalPassGen;
  }
  var spccase = confirm("Use special case charators in your password?");
  if (spccase === true) {
    finalPassGen = finalPassGen + special;
  }else {
    finalPassGen = finalPassGen;
  }

 console.log(inputChar)

  for (let i = 0; i <= (inputChar.length) ; i++) {

    slice = getRandomInt(finalPassGen.length);

    password = finalPassGen.slice(slice) + password;

    console.log(password);

  }
    
  
}





    






