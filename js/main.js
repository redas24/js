//  Getters and Setters
// Special methods that are invoked automatically when a property is accessed or assigned to.
let myObj(4) = {
  otherProp: "other",

  get prop() {
    console.log("accessing prop")
    return this.otherProp
  },
}
console.log(MyObj)
