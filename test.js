let newArray = [];
let newArray2 = [];
let newArray3 = [];
let newArray4 = [];

function myFunction() {
    if (newArray.length < 10) {
        newArray.push("Lucas");
        console.log(newArray);
    } else if (newArray.length == 10) {
        newArray2.push("Lucas");
        console.log(newArray2);
    }

}
Array.prototype.myFunction = myFunction;
myFunction();


CSSFontFeatureValuesRule
