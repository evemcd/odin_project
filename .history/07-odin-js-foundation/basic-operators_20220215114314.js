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

//TASKS
let a = 1;
let b = 1;
let c = ++a;                //2, prefix form returns the new value
let d = b++;                //1, postfix form returns the old value

let x = 2;
let y = 1 + (x *= 2);       //x=4, y=5

"" + 1 + 0;                 //10
"" - 1 + 0;                 //-1
true + false;               //1
6 / "3";                    //2
"2" * "3";                  //6
4 + 5 + "px";               //"9px"
"$" + 4 + 5;                //"$45"
"4" - 2;                    //2
"4px" - 2;                  //NaN
"  -9  " + 5;               //"  -9  5"
"  -9  " - 5;               //-14
null + 1;                   //1
undefined + 1;              //NaN
" \t \n" - 2;               //

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
c = +a + +b;                  //12