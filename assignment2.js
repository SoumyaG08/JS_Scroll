/**
 * Created by AladiSo01 on 8/9/16.
 */
// Problem 1
console.log(first_variable);
var first_variable = "Yipee I was first!";
function firstFunc() {
    first_variable = "Not anymore!!!";
    console.log(first_variable)
}
console.log(first_variable);

// //first_variable floats to the top
// var first_variable
// console.log(first_variable) //will return undefined
// first_variable = "Yippee I was first" // assignment to variable
// //final line will print Yippee I was first


//Problem 2
var food = "Chicken";
function eat() {
    food = "half-chicken";
    console.log(food);
    var food = "gone";       // NOTE: I'M TRYING TO TRICK YOU HERE!!!!
}
eat();
console.log(food);

//Prediction
//var food floats to the top
//food = Chicken
//Inside function
//var food from third line floats to the top of the function
//local food gets replaced by half-Chicken
//console logs half-chicken
//local food gets replaced by gone
//when eat is called it logs 'half-chicken'
//when global food is console logged, it stays as 'Chicken'

// Problem 3
var new_word = "NEW!";
function lastFunc() {
    new_word = "old";
}
console.log(new_word);

//Prediction
//var new_word floats to the top
//inside the function new_word looks for a local var, doesn't find it and goes one-level higher and replaces 'NEW' with 'old'
//bt last func was never invoked, so new_word stays at 'NEW'
//if lastFunc() is involed before the console log, the NEW will be replaced by old