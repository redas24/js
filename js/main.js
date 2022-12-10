// Working with dates and times
/*Date objects must be created using new Date()
 - A date object represents a specific instant in time
 - Dates are the number of milliseconds to have elapsed since 1 january 1970
*/

let now = new Date();
console.log( now);
let partyTime = new Date (946583788000);
console.log(partyTime);
let dob = new Date('june 2 1983')
console.log(dob);

let specialDate = new Date(1983,2, 6, 1990, 2, 19);
console.log(specialDate);
console.log(specialDate.getDate());
console.log(specialDate.getMonth());
console.log(specialDate.getFullYear());
console.log(specialDate.getUTCDate());
console.log(specialDate.getUTCMonth());
console.log(specialDate.getUTCFullYear())
console.log(specialDate.getDay())
console.log(specialDate.getUTCDay())
console.log(specialDate.toString())
console.log(specialDate.toUTCString())
console.log(specialDate.toDateString())
console.log(specialDate.toTimeString())
console.log(specialDate.toISOString())
console.log(specialDate.toLocaleString())

// Summary
/*Use the Date object to work with dates and times:
- Use the Date() constructor to create date objects
- USe instance methods to get or set parts of the date and time
 */