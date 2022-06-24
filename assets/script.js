// Assignment Code

const lowerc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","w","X","Y","Z"]
const numbers = ["1","2","3","4","5","6","6","7","8","9","0"]
const special = ["!","#","$","%","^","&","*","(",")","_","-","?"]

// When I click the button to Generate Password, I'm presented with a 
// series of Prompts for Password criteria

var generateBtn = document.querySelector("#generate");

// Then a Prompt askes for what length the password should be
// between the limits of ( at least 8 no more than 128 characters )



//  Then a Prompt asks for character types to include in the password
// and alerts give me opions wheather or not to include the following
// Lowercase, Uppercase, Numeric, and/or Special charactors.



// Then user input should be validated and at least one charactors type selected


// Then the password is generated and displayed in an alert of written to the page





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
