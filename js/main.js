//  Getters and Setters
// Special methods that are invoked automatically when a property is accessed or assigned to.
let myObj = {
  otherProp: "other",

  get prop() {
    console.log("accessing")
  },
}
