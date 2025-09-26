// primitive data types
// 7 types : string, number, boolean , null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 1100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;


const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);


const bigNumber = 1232312423999323323232n

console.log(bigNumber);


// non primitive(reference) data types
// Array , objects, function

const heros = ["saktiman", "doga", "naagraj"]

let myObj = {
    name: "naren",
    age: 25,
    email: "naren@gmail.com"

}

// function declare as a variable 
const myFunction = function(){
    console.log("Hello");
    
}

// To find datatype 

console.log(typeof outsideTemp);
console.log(typeof bigNumber);
console.log(typeof scoreValue);
console.log(typeof anotherId);

console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);


