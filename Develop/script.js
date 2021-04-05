var generateBtn = document.querySelector("#generate");

var randomCharacters = [
]

function generatePassword() {
  //Prompt 1- length of password//
  var length = Number(prompt("Before you we generate a password, we need to ask a few questions. How long would you like it to be? Choose between 8 to 128 characters"));
  
  ///Alert 1- Needs to be 8-128 characters///
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("It must be between 8 and 128 characters"));

  ///Lines 14-29 randomCharacters confirmations looped in with line 3///
  var uppercase = confirm("Do you want uppercase letters in your password?");
  if (uppercase) {
    randomCharacters.push(getRandomUppercase); //do it for each VAR//
  }
  var lowercase = confirm("Do you want lowercase letters?");
  if (lowercase) {
    randomCharacters.push(getRandomLowercase);
  }
  var numbers = confirm("Do you want to use numbers in your password?");
  if (numbers) {
    randomCharacters.push(getRandomNumbers);
  }
  var specialCharacters = confirm("Do you want to use Special characters?");
  if (specialCharacters) {
    randomCharacters.push(getRandomSpecialCharacters);
  }

/// Lines 32-50 confirmation in While Loop///
  while (!uppercase && !lowercase && !numbers && !specialCharacters) {
    alert("You must select at least one character type");
    var uppercase = confirm("Do you want uppercase letters in your password?");
    if (uppercase) {
      randomCharacters.push(getRandomUppercase); 
    }
    var lowercase = confirm("Do you want lowercase letters?");
    if (lowercase) {
      randomCharacters.push(getRandomLowercase);
    }
    var numbers = confirm("Do you want to use numbers in your password?");
    if (numbers) {
      randomCharacters.push(getRandomNumbers);
    }
    var specialCharacters = confirm("Do you want to use Special characters?");
    if (specialCharacters) {
      randomCharacters.push(getRandomSpecialCharacters);
    }
  };
 /////Returning Password (this is what makes it random///
  var password = "";
  for (var i = 0; i < length; i++) {
    password += randomCharacters[Math.floor(Math.random() * randomCharacters.length)]()
  }
  return password
}

// generating functions fromCharCode:   https://www.w3schools.com/charsets/ref_html_ascii.asp
function getRandomUppercase() { //*() * (Max- min) + min
  return String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65));
}
function getRandomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97));
}
function getRandomNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * (57 - 48) + 48));
}
function getRandomSpecialCharacters() {
  var specialCharacters = '!@#$%^&*';
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword)