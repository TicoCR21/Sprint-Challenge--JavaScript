// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: Because of closure. The variable internal is in scope.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();


/* Task 2: Counter */
/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation( value )
{
  let total = 0;
  return function counter()
  {
    for( let i = 1; i <= value; i++ )
      total += i;
    return total;
  }
}

let counter = summation( 4 );
console.log( counter() );