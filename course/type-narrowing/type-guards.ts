/* TYPE NARROWING
Type guards
One way that TypeScript can narrow a type is with a conditional statement that checks if a variable is a specific type. This pattern is called a type guard. Type guards can use a variety of operators that check for a variable’s type. One operator we can use is typeof. For example:
 */
function formatDate(date: string | number) {
  // date can be a number or string here
 
  if (typeof date === 'string') { 
    // date must be a string type
  }
}
/* In this example, TypeScript is able to infer that date must be a 'string' inside the conditional because typeof checked that date is a 'string'. TypeScript evaluated what our code would do at runtime and then inferred a more specific type for date.

TypeScript can recognize typeof type guards that check for these specific values: 'string', 'number', 'boolean', and 'symbol'.

Instructions
1.
In the code editor, there’s a program that should take in sports statistics and format them. The formatStatistic() function should take in values like 'Win' and 0.364, then format them to 'WIN' and 0.36 respectively.

Currently, our program is broken. If you run tsc in the terminal, you’ll see an error that we cannot call .toFixed() on stat. Let’s fix that with a type guard.

In the body of the formatStatistic() function, write a type guard using typeof that checks if stat is a 'number'. If it is, then move the return stat.toFixed(2) statement inside the type guard to return the result.

2.
Now let’s handle the case where stat may be a 'string'.

Write another type guard using typeof in the body of formatStatistic() that checks if stat is a 'string'. If it is, call .toUpperCase() on it and return the result.

3.
Compile your TypeScript code into JavaScript by running tsc in the terminal.

4.
Run your compiled code with node index.js in the terminal to see the output of your code. You should see 'WIN' and 0.36 as the output. */

/*give code
function formatStatistic(stat: string | number) {
  
    return stat.toFixed(2);
}

console.log(formatStatistic('Win'));
console.log(formatStatistic(0.364));

*/

/* SOLUTION */

function formatStatistic(stat: string | number) {
    if (typeof stat === 'number'){
      return stat.toFixed(2);
    }else if(typeof stat === 'string'){
      return stat.toUpperCase();
    }
  }
  
  console.log(formatStatistic('Win'));
  console.log(formatStatistic(0.364));