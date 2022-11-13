"use strict";

let canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 250;


let ctx = canvas.getContext('2d');
ctx.font = '70px Time New Romance';
ctx.fillText ("JavaScript learning path", 50, 50);
document.body.appendChild(canvas);

//JSON: JavaScript Object Notation

const myObj = { 
    name: "Lucas",
    hobbies: ["coding","hacking","music"],
    hello: function() {
        console.log("Hello!");
    }
}
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);