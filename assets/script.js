

const lowerc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","w","X","Y","Z"]
const numbers = ["1","2","3","4","5","6","6","7","8","9","0"]
const special = ["!","#","$","%","^","&","*","(",")","_","-","?"]
var finalPassGen = [];
var password = "";
var inputChar = 0;



// Assignment Code

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", userInput);

// Write password to the #password input

function writePassword(password) {
 var passwordText = document.querySelector("#password");
 passwordText.value = password;
}

function userInput() {
      inputChar = prompt("How may charactures would you like in your password?");
  if (inputChar >= 8 && inputChar <= 127) {
    generatePassword();
  } else {
    alert("Please enter a Minimum of 8 charactures with a Maximum of 128 charactures");
  }
}


function generatePassword() {

  var lwrcase = confirm("Would you like Lower Case letters in your Password?");
  if (lwrcase === true) {
    finalPassGen = finalPassGen + lowerc;
  }else {
    finalPassGen = finalPassGen
  }
  var uprcase = confirm("Would you like Upper Case letters in your Password?");
  if (uprcase === true) {
    finalPassGen = finalPassGen + upperc;
  }else {
    finalPassGen = finalPassGen;
  }
  var numcase = confirm("Would you like Numaric Values in your Password?");
  if (numcase === true) {
    finalPassGen = finalPassGen + numbers;
  }else {
    finalPassGen = finalPassGen;
  }
  var spccase = confirm("Would you like Special Case charators in your Password?");
  if (spccase === true) {
    finalPassGen = finalPassGen + special;
  }else {
    finalPassGen = finalPassGen;
  }

 console.log(inputChar);


 console.log(finalPassGen);

  for (let i = 0; i <= inputChar ; i++) {

    password = finalPassGen[Math.floor(Math.random()*finalPassGen.length)] + password;

    console.log(password);

  }
    
  writePassword(password);
}





    






