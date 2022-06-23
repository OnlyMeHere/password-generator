// Assignment Code

const lowerc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","w","X","Y","Z"]
const numbers = ["1","2","3","4","5","6","6","7","8","9","0"]
const special = ["!","#","$","%","^","&","*","(",")","_","-","?"]



var generateBtn = document.querySelector("#generate");





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {




}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
