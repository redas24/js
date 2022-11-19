// Loops
/*
let myNum = 50;
while (myNum < 50) {
    console.log(myNum);
    myNum+= 2;
    console.log(myNum)
}

// don`t create an endless loop important 

do {
    console.log(myNum);
} while (myNum < 50)
*/
// For Loops
/*
for (let i = 0; i <= 10; i++) {
    console.log(i);
} 

let name = "Luca";
for(let i = 0; i <= name.length; i++) {
    console.log(name.charAt(i));
}

var a = 2;

{ 
    let a = 3;
    console.log( a );
}
console.log( a );
*/
!(function () {

    let name = " Lucas";
    let counter = 0;
    let myLetter;
    while (counter <= 3) {
        myLetter = name[counter];
        console.log(myLetter);
        if (counter === 1 ) {
            counter+=2;
            continue;
        }
        if (myLetter === "s") break;
        counter++;
    }
})();

console.log(counter);
