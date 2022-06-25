

const lowerc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","w","X","Y","Z"]
const numbers = ["1","2","3","4","5","6","6","7","8","9","0"]
const special = ["!","#","$","%","^","&","*","(",")","_","-","?"]
var finalPassGen = [];


// Assignment Code

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", userInput);

// Write password to the #password input

function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector("#password");
 passwordText.value = password;
}

function userInput() {
  var inputChar = prompt("How may characture would you like in your password?");
  if (inputChar >= 8 && inputChar <= 127) {
    criteriaGuantlet();
  } else {
    alert("Please enter a Minimum of 8 charactures with a Maximum of 128 charactures");
  }
}





function criteriaGauntlet() {

  var lwrcase = alert("use lower case letters in your password?");
  var uprcase = alert("Use upper case letters in your password?");
  var numcase = alert("Use numaric values in your password?");
  var spccase = alert("Use special case charators in your password?");
  
}


function generatePassword() {

  if (lwrcase === true) {
    [finalPassGen] = [finalPassGen] + [lowerc];
  }else {
    [finalPassGen] = [finalPassGen]
  }
  if (uprcase === true) {
    [finalPassGen] = [finalPassGen] + [upperc];
  }else {
    [finalPassGen] = [finalPassGen];
  }
  if (numcase === true) {
    [finalPassGen] = [finalPassGen] + [numbers];
  }else {
    [finalPassGen] = [finalPassGen];
  }
  if (spccase = true) {
    [finalPassGen] = [finalPassGen] + [special];
  }else {
    [finalPassGen] = [finalPassGen];
  }

console.log([finalPassGen]);
 

  for (let i = 0; i <= (inputchar.length) ; i++) {

    slice = math.floor(math.random() * finalPassGen.length);

    #password = finalPassGen.slice(slice) + #password;

  }return: #password;
    

}





    






