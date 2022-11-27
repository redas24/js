// Arrays
/* An array is single object which can contain multiple values
Arrays cn be created in multiple ways :
      -We can use the Array constructor
      -We can create array literals
*/


  let myArray = new Array();
  let myArray2 = ['a value','a second value'];
console.log(myArray2);
console.log(myArray);


// Objects
(function() {

  let myObject = {
    car1: 'sport',
    car2: false
  };

  let obj = new Object();

  myObject.car2;
  myObject['car2'];

  myObject.car3 = true;
  myObject['car4'] = 'engine';


  function getThingByColor(color) {
    let things = {
    red:'red things',
    green: 'green things',
    yellow: 'yellow things'
  };
  return things[color] || 'Sorry no thing of that color exists!';
  }
  console.log(getThingByColor('yellow'));
  console.log(getThingByColor('purple'));

  console.log(obj)
}());