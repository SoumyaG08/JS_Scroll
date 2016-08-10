/**
 * Created by AladiSo01 on 8/9/16.
 */
var outer = "Global Scope!"
function scoper() {
    outer = "Local Scope?"   // This will first search inside the function for variable "outer"
                             // and then if it doesn't find one it will search one level up
  console.log(outer)                           // (it will keep searching until it finds the variable
}
scoper()                   // So this will reassign outer to "Local Scope?"
console.log("outer:", outer);