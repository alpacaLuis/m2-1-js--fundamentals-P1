function exercise6_3() {
  // Exercise 6.3
  //
  // Write a loop that will print to the console
  // all of the EVEN integers from 1 to 50.
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  
  let divisor = 2

  for (let number = 1; number <= 50; number++) {
    if(number % divisor === 0){ // even
      console.log(number)
    }
    }
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-6.3

module.exports = exercise6_3;
