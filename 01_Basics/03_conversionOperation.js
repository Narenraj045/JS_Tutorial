let score1=33;
let score2="35";
let score3="35acb";


//console.log(typeof score1);
//console.log(typeof(score1)); // as a method

//console.log(typeof score2);
//console.log(typeof(score2)); // as a method

// here the score2 value comes as string , but suppose we know 100% that we are going to do operation in numbers then 

let valueInnumber = Number(score2);
//console.log(typeof valueInnumber);

let vauleInNumber2 = Number(score3);
//console.log(vauleInNumber2); // coming as not a number 
//console.log(typeof vauleInNumber2);

let score4 = null;
//console.log(typeof score4);

let score5 = undefined;
//console.log(typeof score5);

// when we are converting a number to number then it is easily converted ("33" => 33)
// "33abc" => NaN its not a number but when we check typeof then it shows number
//true converts as 1, and false as 0, 

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

//console.log(booleanIsLoggedIn);


// boolean conversion 
// 1 => true;  0 => false; 
// "" => false; 
//"Naren" => true


let somenumber=33;
let stringNumber = String(somenumber);
//console.log(stringNumber);
//console.log(typeof stringNumber);

//***********************/ Operation ***************************


let value = 3
let negValue = -value
//console.log(negValue);
//console.log(typeof negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*3);
// console.log(2**3); // power
// console.log(2/3); 
// console.log(2%3); // reminder


let str1="Naren"
let str2 =" Kumar"
let str3 = str1 + str2;
// console.log(str3);

// console.log(1 + "2");
// console.log("1" + 2);
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log((3 + 4) * 5 % 3); // for coding pracite try to use paranthesis where ever required 

// console.log(true);
// console.log(+true); // not a good practice

// console.log(true+); // error

// console.log(+""); // we should avoid such conversion

let num1, num2, num3
num1 = num2 = num3 = 2+2; // avoid writing such confusiong code 


let gameCounter = 100;
gameCounter++
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);











 