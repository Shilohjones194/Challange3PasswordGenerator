# Password Generator Starter Code

GIVEN I need a new, secure password

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
// create prompt.window when clicking on button

WHEN prompted for password criteria
THEN I select which criteria to include in the password
// create prompt.window asking 

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
// prompt.window asking how long 8-128"
// if then 

WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
/// prompt do you want lowercase? Y or N
/// prompty do you want uppercase, Y or N
/// do you wannt numeric? Y or N
/// and do you want special characters? Y or N
////-Error message " need to be atleast one selected please try and again.

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
