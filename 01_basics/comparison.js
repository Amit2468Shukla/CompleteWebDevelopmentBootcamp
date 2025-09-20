// console.log("2" > 1);//true
// console.log("02" > 1);//true
// console.log("2" > "1");//true
// console.log("02" > "1");//false
// console.log(null > 0);//false
// console.log(null == 0);//false
// console.log(null >= 0);//true

console.log(undefined > 0);//false
console.log(undefined == 0);//false
console.log(undefined >= 0);//false

//=== It is strict type of equality operator and it will check value as well as type also.

console.log(2 === 2);//true
console.log("2" === 2);//false
