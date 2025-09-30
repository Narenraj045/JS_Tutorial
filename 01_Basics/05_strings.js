const name = " Naren "
const repoCount = 50;
 console.log(name + repoCount + " value"); // this syntax to concatinate is not good , try to ignore 

 // we will use backtick in place of that where we have string interpolation 
 // actually we create placeholders and we can inject variable directly 


 console.log(`Hello, Many name is ${name} and my repo count is ${repoCount}`);
 
// one more way to declare string 
const gameName = new String("Narengame");

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__); // different functions 
console.log(gameName.length); // different functions 
console.log(gameName.toUpperCase()); // different functions 
console.log(gameName.charAt(2)); // different functions 
console.log(gameName.indexOf('g')); // different functions 


const newString = gameName.substring(0,5);
console.log(newString);

const anotherString = gameName.slice(2,5);
console.log(anotherString);

const anotherString2 = gameName.slice(-8,3); // we can even use minus value in slice function , it will count from reverse
console.log(anotherString2);


const newStringOne = "    Naren Kumar  ";
console.log(newStringOne);
console.log(newStringOne.trim()); // trim function removes the blank spaces 


const url = "https://naren.com/naren%20kumar"
console.log(url.replace('%20', '_'));

console.log(url.includes('naren')); // we can even ask question 
console.log(url.includes('nikhil')); // we can even ask question

console.log(url.split('.'));










 