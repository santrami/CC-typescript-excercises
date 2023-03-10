/* UNION TYPES
Defining Unions
Unions allow us to define multiple allowed type members by separating each type member with a vertical line character |. With a union, we can re-type the program from the previous exercise like this:
 */
let ID: string | number;
 
// number
ID = 1;
 
// or string
ID = '001';
 
console.log(`The ID is ${ID}.`);
/* In this example, string | number is a union that allows ID to be a string or a number. It’s more flexible than a single primitive type, but much more specific than the any type.

Unions can be written anywhere a type value is defined, including function parameters: */

function getMarginLeft(margin: string | number) {
  return { 'marginLeft': margin };
}
/* Using unions to type function parameters is especially convenient because functions often need to handle multiple types of input.

Instructions
1.
We’ve written a function that creates a custom version of console.log() named printNumsAndStrings(). If you hover over the printNumsAndStrings() function’s statement parameter, you’ll notice that TypeScript infers that statement has an any type. Let’s make this type more specific with a union.

Add a union to the statement parameter with two type members: string and number. */


/* 2.
Now call the printNumsAndStrings() function twice, once with a number as its argument and once with a string its argument, then run your code.


Stuck? Get a hint
3.
In the command line, run tsc to compile your code.

4.
Run node index.js to execute your compiled code. You should see the custom log messages from the printNumsAndStrings() function as the output. */

/* given code: 
function printNumsAndStrings(statement) {
    console.log(`ℹ️ LOG:: ${statement}`);
  }
  
  printNumsAndStrings('hello!');
  */

  /* SOLUTION */

  function printNumsAndStrings(statement:string | number) {
    console.log(`ℹ️ LOG:: ${statement}`);
  }
  
  printNumsAndStrings(36);
  printNumsAndStrings('hello!');