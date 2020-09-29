// Exercise 19
//
// The purpose of this exercise is to re-implement standard array methods
// Do not use the array methods .map, .filter and .every
// You can use 'for' loops to implement your logic
//
// Write a function that takes an array and a function as parameters and returns
// a new array with all elements that pass the test implemented by the provided function.
//
// - filter(arr, func) returns an array with only the elements of arr that satisfy func.
//
// Example
// filter([1, 2, 3, 4, 5], function(x) { return x % 2 === 0;}) returns [2,4];
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function filter(arr, func) {

  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      array.push(arr[i]);
    }
  } return array;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(
  filter(["Batman", "Superman", "Moe", "Flash"], function (x) {
    return x.length > 5;
  })
);

// This is needed for automated testing (more on that later)
module.exports = filter;
