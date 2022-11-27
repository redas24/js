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

// Sets
/*Set:
  -Data structure to store unique values
  - Get number of items using size property
  - Use add to add new items
   - Use delete to remove items
   - Use has to see if set contains an item
    -Similar to arrays
    */
let mySet = new Set();
let anArray = [1, 1, 1, 2, 2, 3];
let mySet2 = new Set(anArray);
console.log(mySet2);
console.log(mySet2.size);
mySet2.add(5);
console.log(mySet2);
console.log(mySet2.has(2));

// Map Objects