let message;                // variable is declared
message = 'Hello';          // assigns data to the variable
alert(message);             // popup alert with the contents of message

let message1 = 'Hello';     //declares and assigns at the same time
let user = 'John', age = 25, message2 = 'Hello';        //declare multiple variables, not recommended due to poor readability

message = 'World';          // reassigns data
alert(message);             //will give two popups one after the other

let word = 'this';
//let word = 'that';        //would trigger a SyntaxError, can't declare the same variable twice

//variable names can contain letters, numbers, $ and _. The first character cannot be a number
//camelCase is commonly used
//apple and AppLE are two different variable names
//there is a list of reserved words which cannot be used as variable names as they're used by javascript itself, such as let, class, return, function

//constant (unchanging) variables
const myBirthday = '18.03.1986';
myBirthday = '01.01.2001'   //error, can't reassign the constant

//use constants as aliases for difficult-to-remember values known prior to execution
const COLOR_RED = "#F00";   //it's easier to remember
