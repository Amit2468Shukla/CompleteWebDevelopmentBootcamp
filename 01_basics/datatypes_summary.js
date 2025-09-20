//Primitive Data Types = 7 categories : String, Number, Boolean, Null(empty value)
//Undefined, Symbol, BigInt
//Reference Data Types (Non-Primitive Data Types) = Arrays and Objects and functions
// let score = 100;
// let scoreValue = 100.4;//Number

// const isLoggedIn = false;
// const outsideTemp = null;//Objecct
// let userEmail; //undefined

// const id = Symbol("123");
// const anotherId = Symbol("123");
// console.log(id === anotherId);//false
// console.log(id);
// console.log(anotherId);

// const bigNumber = 1234567890123456789012345678901234567890n;
// console.log(bigNumber);
// console.log(typeof bigNumber);

// Non-Primitive Data Types
const heroes = ["Shaktiman","Nagraj","Doga"]
let myObj = {
    name: "Amit",
    age: 28,
    isLoggedIn: false
}
console.log(heroes);//[ 'Shaktiman', 'Nagraj', 'Doga' ]
console.log(myObj);//{ name: 'Amit', age: 28, isLoggedIn: false }
console.log(typeof myObj);//object
console.log(typeof heroes);//object

const myFunction = function(){
    console.log("Hello World");
}
console.log(myFunction);//[Function: myFunction]
console.log(typeof myFunction);//function or object function