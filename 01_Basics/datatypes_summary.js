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



//******************** Memory types and where it is used  ********************

// 1) Stack Memory (used for primitive datatype) and 
// 2) Heap Memory (used for non-primitive datatype) 

let myYouTubeName = "Narenkumardotcom"
let anotherName = myYouTubeName;
console.log(anotherName);

anotherName = "chaiaurcode"

console.log(myYouTubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upiId: "user@ybl"

}

let userTwo = userOne;

userTwo.email="Naren@google.com"

console.log(userOne.email);
console.log(userTwo.email);


// all the primitive values goes into stack , and when we take anything into stack then we get a copy of it
// but when we keep any values in heap then we get its reference so whet ever we change we change in original value 


