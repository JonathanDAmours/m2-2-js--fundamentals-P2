// Exercise 11
//
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(grades) {

    let sum = grades.reduce((a, b) => a + b);
    return Math.round(sum / grades.length);
  }
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(calculateAverage([60.2, 98, 95.3]));


// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
