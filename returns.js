/**
 * Created by AladiSo01 on 8/9/16.
 */
function operation ( arg ) {
    function addition ( arg1, arg2 ){
        return arg1 + arg2;
    };
    function multiplication ( arg1, arg2 ) {
        return arg1 * arg2;
    };
    if ( arg == "add" ) {
        return addition;
    }
    if ( arg == "multiply" ) {
        return multiplication;
    }
    return false;
}
console.log(operation("add")(4, 5));           // returns 9. We invoke whatever is returned from
                                  // operation("add"), which is a function.
console.log(operation("nada")(4, 5));          // What now?  operation("nada") doesn't return a function.
var mult = operation("multiply"); // returns the multiplication function
console.log(mult);                // you see the _actual_function_ logged to console
console.log(mult(4, 5));                       // returns 20
console.log(operation("subtract"));