// Assignment Code

const lowerc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","w","X","Y","Z"]
const numbers = ["1","2","3","4","5","6","6","7","8","9","0"]
const special = ["!","#","$","%","^","&","*","(",")","_","-","?"]

// When I click the button to Generate Password, I'm presented with a 
// series of Prompts for Password criteria
var btn = document.getElementById(generate);


function waitForClick() {
  if (btn.addEventListener("click", writePassword()));
    console.log("button was clicked");

}

// var button = document.querySelector("#generate");

// Then a Prompt askes for what length the password should be
// between the limits of ( at least 8 no more than 128 characters )

// Add event listener to generate button


//  Then a Prompt asks for character types to include in the password
// and alerts give me opions wheather or not to include the following
// Lowercase, Uppercase, Numeric, and/or Special charactors.



// Then user input should be validated and at least one charactors type selected


// Then the password is generated and displayed in an alert of written to the page


// var passwordText = document.querySelector("#password");
// var password = generatePassword();
// passwordText.value = password;


// Write password to the #password input

function writePassword() {
    var inputchar = prompt("Please enter the number of charactors you want in your password ( Minimum 8, Maximum 128 ) ")
    console.log("button works! user entered: " + (inputchar));
    if (inputchar < 8) || (inputchar > 128) {
      alert ("Number of charactures must be between 8 and 128");
      return: writePassword();
      else {
        criteriaGaunlet();
      }
    }
}

function criteriaGauntlet() {

  var lwrcase = confirm("use lower case letters in your password?");
  var uprcase = confrim("Use upper case letters in your password?");
  var numcase = confirm("Use numaric values in your password?");
  var spccase = confirm("Use special case charators in your password?");
  
}

// function generatePassword() {

function passWordGenArrayMaker(){

  if lwrcase = true {
    finalPassGen = finalPassGen + lowerc;
  }else if {
    finalPassGen = 0
  }
  if uprcase = true {
    finalPassGen = finalPassGen + upperc:
  }else if {
    finalPassGen = finalPassGen;
  }
  if numcase = true {
    finalPassGen = finalPassGen + numbers;
  }else if {
    finalPassGen = finalPassGen;
  }
  if spccase = true {
    finalPassGen = finalPassGen = special;
  }else {
    finalPassGen = finalPassGen;
  }

  for i = 0; i <= inputchar.length ; i++;{

    #password = finalPassGen + (math.floor(math.random()) * (inputchar));

  }return: #password;
    

}





    






