const accountId = 144553;
let accountEmail = "naren@gmail.com";
var accountPassword = "123456";
/*
Prefer not to use var 
because of issue in block scope and fuctional scope
*/
accountCity = "Deoghar"; // variable can be declared like this also but dont use this 
let accountState;

// accountId=2; // not allowed

console.log(accountId);

accountEmail = "nk@gmail.com";
accountPassword = "212121";
accountCity="Bangalore";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);