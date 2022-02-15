let x = 5 * 2;          //5 and 2 are operands or arguments
x = 5 % 2;              //1, a remainder of 5 / 2
x = 8 % 3;              //2, a remainder of 8 / 3
x = 2 ** 2;             //4, raises 2 to the power of 2 (deutsch 2 hoch 2)
x = 2 ** 3;             //8
x = 2 ** 4;             //16
x = 4 ** (1/2);         //2 (power of 1/2 is the same as a square root)
x = 8 ** (1/3);         //2 (power of 1/3 is the same as a cubic root)

//string concatenation
let s = "my" + "string";    //mystring
s = "1" + 2;                //"12"
s = 2 + "1";                //"21"
s = 2 + 2 + "1";            //"41"
s = "1" + 2 + 2;            //"122"
let apples = "2";
let oranges = "3";
s = apples + oranges;       //"23"
s = +apples + +oranges;     //5, as a unary operator it turns the variable into a number, so it adds the numbers instead of concatenating, like Number(apples) + Number(oranges)

//Operator precedence
//If an expression has more than one operator, the execution order is defined by their precedence, or, in other words, the default priority order of operators.
//Let’s note that an assignment = is also an operator. It is listed in the precedence table with the very low priority of 2. That’s why, when we assign a variable, like x = 2 * 2 + 1, the calculations are done first and then the = is evaluated, storing the result in x.

