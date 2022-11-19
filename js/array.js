const myArray = [];

myArray[0] = "Lucas";
myArray[1] = 1001;
myArray[2] = false;

myArray.push('college')

const newLength = myArray.unshift(44);

myArray.splice(1, 1, 42);
myArray.pop = myArray;
console.log(myArray);
console.log(myArray.length);
console.log(myArray[myArray.length - 1])


// Slice method with arrays 
const myArray1 = ["A","B","C","D","E","F"]

const newString = myArray1.join();
myArray1.reverse();

const newArray2 = myArray1.slice(2);

console.log(newArray2);

const myArrayA = ["A","B","C"]
const myArrayB = ["D","E","F"];

const newArray = myArrayA.concat(myArrayB)

console.log(newArray);