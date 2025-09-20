const accountId="4682134"
let accountEmail="abc@gmail.com"
var password="24680"
accountCity="Hyderabad"

let accountState;
/*
prefer not to use var because of issue in block scope and functional scope.
*/
console.log(accountId);
console.table([accountEmail,password,accountCity,accountState])
