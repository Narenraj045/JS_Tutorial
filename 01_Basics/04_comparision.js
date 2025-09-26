// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2" > 1); // java script converted 2 to number , try to compare between same data type 
// console.log("02" > 1);


// avoid this type of comparision
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// the reason is that an equality check == and comparisions >< >= <= works differently 
//comparision convert null to a number, treating it as zero 
// thats why (3) null >= 0 is true , and (1) null > 0 is false


// avoid this type of comparision
// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);


//strict check (=== / tripple equals check values with datatypes)

console.log("2" == 2);
console.log("2" === 2); // 


