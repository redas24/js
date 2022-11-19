// Conditionals: If Statements
//syntax
let customerIsBanned = false
let pizza = "Margherita"
let crackers = true
let reply
if (customerIsBanned) {
  reply = "No pizza for you!"
} else if (pizza && crackers) {
  reply = "Here`s your order of ${pizza} & crackers."
} else {
  reply = "Sorry, we`re out of ${pizza}"
}
console.log(reply)

let testScore = 59
let collegeStudent = true
let grade
if (testScore >= 90) {
  grade = "A"
} else if (testScore >= 80) {
  grade = "B"
} else if (testScore >= 70) {
  grade = "C"
} else if (testScore >= 60) {
  grade = "D"
} else {
  if (collegeStudent) {
    grade = "U"
  } else {
    grade = "F"
  }
}
console.log(grade)
