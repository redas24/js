//  Getters and Setters
// Special methods that are invoked automatically when a property is accessed or assigned to.
let myObj = {
  otherProp: "other",

  get prop() {
    console.log("accessing prop")
    return this.otherProp
  },
  set prop(val) {
    console.log('setting other prop to ${val}')
    this.otherProp = val

  }
}
console.log(myObj.prop)
myObj.prop = 'new'
console.log(myObj)
// Summary
/*Getters and Setters
- Special properties that invoke methods when accessed or assigned
- this points to the object they are within */

// Custom types Object

class Person {
  constructor (name) {
    this.name = name
  }
  greet() {
    return `Hi, my name is ${this.name}`
  }
}


let alex = new Person('alex')
console.log('alex')


const Button = styled.button`

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 3px;
`;

