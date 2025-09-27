const name = "Amit"
const repoValue = 20
console.log(name + repoValue + " Value");

console.log(`Hello my name is ${name} and repovalue  is ${repoValue}`);

const gameName = "AmitBlueStar";
console.log(gameName[0]);
console.log(gameName[8]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
console.log(newString);//Amit

const anotherString = gameName.slice(-2, 4);
console.log(anotherString);

const newString1 = "  Ankit   ";
console.log(newString1);
console.log(newString1.trim());//Ankit

const url = "https://www.amitstar.com/amit%20star"
console.log(url.replace('%20', '-'));//https://www.amitstar.com/amit-star
console.log(url.includes("amit"));//true
console.log(url.includes("start"));//false

const testString = "Amit-Star-Blue"
console.log(testString.split('-'));//[ 'Amit', 'Star', 'Blue' ]
