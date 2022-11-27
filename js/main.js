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

// Maps Objects
// maps similar to object
/* Map:
  - Similar API to Set
  - Store key-value pairs
  - Use set method to add new items
  - Use get method to retrieve items
*/
let myMap = new Map;
let myMap2 = new Map ([['a', 'b'],[1, 2]]);
myMap2.set('c', 3);
console.log(myMap2);

// WeakSet and WeakMap
/* Reference to objects are held weakly
The garbage collector will be able to dispose of them when no longer in use
 */

let myWeakSet = new WeakSet();
let someObj = {};
myWeakSet.add(someObj);
console.log(myWeakSet.has(someObj));

myWeakSet.delete(someObj);
console.log(myWeakSet.has(someObj));


//The key in WeakMap must be object

let myWeakMap = new WeakMap();
/* Summary
  WeakSet andWeakMap:
    - Similar to Set and Map
    - Except reference to values are held weakly - do not prevent garbage collector
    - Both have very small APIs
    - Cannot be iterated
  */