// Exercise 2
//
// Write a function that accepts two integers and returns
// the greater integer.
//
//
// Edit only the code between the lines (below)
function getMax(num1, num2) {
  if (num1 > num2){
    console.log(num1);
  } else if (num1 < num2){
    console.log(num2); 
  } else{
    console.log("Those intergers are even")
  }
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//
// Call the function to test your code.
console.log(getMax(12, 43));

// Create more test examples.

// This is needed for automated testing (more on that later)
module.exports = getMax;
