let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);


let myCreatedDate = new Date(2025, 8, 30);
// console.log(myCreatedDate.toDateString());

let myCreatedDateOne = new Date(2025, 8, 30, 5, 3);
// console.log(myCreatedDateOne.toLocaleString());


let myCreatedDateTwo = new Date("09-30-2025");
// console.log(myCreatedDateTwo.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // this is mili second value from 1st Jan 1970 till date 

// console.log(myCreatedDate.getTime());


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());






