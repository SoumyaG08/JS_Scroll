/**
 * Created by AladiSo01 on 8/9/16.
 */
for (var i = 0; i < 10; i++) {     // notice the var keyword
    // preceding our variable name as always
    console.log(i);
}
// now looping through an array
var my_array = [1, 3, 5, 7, 9, 6, 2, -1];
for (var i = 0; i < my_array.length; i++) {
    console.log( my_array[i] );     // this would log each value in the array
}

// you can also use a 'for in' loop which basically translates to 'for each index in array do this'
for ( index in my_array ) {
    console.log( my_array[index] );
}

// you can loop through an object using 'for' methods as well
var people = { nameA: "Dexter", nameB: "Jay" };
for ( person in people ) {             // person will be the key
    console.log( people[person] );     // alternative syntax to above line
}

var sample_array = [ 4, 6, 8, 234, "some words"];
var counter = 0;
while ( sample_array[counter] !== undefined ) {
    console.log( sample_array[counter] );
    counter++;     // note that we have to increment otherwise we'll keep looping forever
}