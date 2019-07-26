/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function(ceiling) {
  // do work here
  let smallestNumber = 1;
  let temp = 1;

  while (temp <= ceiling) {
    // cut the loop if ceiling is reached
    if (smallestNumber % temp === 0) {
      // check each temp multiple
      temp++; // iterate through the temp numbers
    } else {
      smallestNumber++;
      temp = 1; // start the reiteration again
    }
  }

  return smallestNumber;
};
