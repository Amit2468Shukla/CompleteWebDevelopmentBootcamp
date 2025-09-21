//stack = primitives (string, number, boolean, null, undefined, symbol) (Local memory)
//heap = non-primitives (arrays, objects, functions)


let name = "Amit";
let newName = name;
// console.log(name);//Amit
// console.log(newName);
newName = "Ankit";
console.log(name);//Amit
console.log(newName);//Ankit

let userOne = {
    email: "user@google.com",
    upi: "user@upi"
}

let userTwo = userOne;
console.log(userOne);
console.log(userTwo);

userTwo.email = "amit@google.com"
console.log(userOne.email);
console.log(userTwo.email);

