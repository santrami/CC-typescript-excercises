/* CUSTOM TYPES
Function Types
One of the neat things about JavaScript is that functions can be assigned to variables.
 */
let myFavoriteFunction = console.log; // Note the lack of parentheses.
myFavoriteFunction('Hello World'); // Prints: Hello World
/* One of the neat things about TypeScript is that we can precisely control the kinds of functions assignable to a variable. We do this using function types, which specify the argument types and return type of a function. Here’s an example of a function type that is only compatible with functions that take in two string arguments and return a number. */

type StringsToNumberFunction = (arg0: string, arg1: string) => number;
/* This syntax is just like arrow notation for functions, except instead of the return value we put the return type. In this case, the return type is number. Because this is just a type, we did not write the function body at all. A variable of type StringsToNumberFunction can be assigned any compatible function: */

let myFunc: StringsToNumberFunction;
myFunc = function(firstName: string, lastName: string) {
  return firstName.length + lastName.length;
};
 
myFunc = function(whatever: string, blah: string) {
  return whatever.length - blah.length;
};
// Neither of these assignments results in a type error.
/* As we can see above, it doesn’t matter what we name the function parameters, so long as they have the correct types (string and string). Therefore, it doesn’t matter what we name the parameters in the type annotation (above, we chose arg0 and arg1).

There’s something important to remember here. We must never be tempted to omit the parameter names or the parentheses around the parameters in a function type annotation, even if there is only one parameter. This code will not run!
 */
type StringToNumberFunction2 = (string)=>number; // NO it's type StringToNumberFunction2 = (arg1:string)=>number; 
type StringToNumberFunction = arg: string=>number; // NO NO NO NO type StringToNumberFunction = (arg: string)=>number;

/* Function types are most useful when applied to callback functions. With how common callback functions are, it’s useful to know how to type them appropriately. Let’s get some practice using function types with callback functions! */


/**   EXCERCISE
 * 
 * 
 * 
 * 1First, try to understand what’s been written in the code editor. We have defined several functions representing math operations. The function mathTutor() is meant to take one of these function names as an argument: the functions are used as callbacks. Try it out by adding the code mathTutor(multiply) and clicking the “Run” button.

Finally, see if it gives you the expected result by running tsc and then node index.js in the terminal.

Checkpoint 2 Passed
2.
Why do we need to bother with function types at all? Well, you can easily demonstrate that mathTutor() does not work well with some callbacks. What if a co-worker accidentally used the callback wrongAdd(), which returns a string rather than a number? Find out by adding the code mathTutor(wrongAdd), then run the program as before.

Checkpoint 3 Passed


3.
Using wrongAdd() as the callback gave strange results, because mathTutor() attempted to add a string and a number. Luckily, function types can help prevent this kind of problem.

Create a type alias called OperatorFunction which has a function type compatible with add() through divide(), but not compatible with wrongAdd(). Then, write a type annotation for mathTutor()‘s argument using OperatorFunction.

Checkpoint 4 Passed


4.
Finally, make sure that TypeScript throws errors when it sees mathTutor(wrongAdd). To do this, transpile and run the program as before.
 * 
GIVEN CODE: 

// Math Operations
function add(a, b){return a+b }
function subtract(a, b){return a-b }
function multiply(a, b){return a*b}
function divide(a, b){return a/b}
function wrongAdd(a, b){return (a+b)+''}

// Add your function type below:


// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback) {
  console.log("Let's learn how to", operationCallback.name,'!');
  let value25 = operationCallback(2,5);
  console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
  console.log('When we', operationCallback.name, value25, 'and 7, we get', operationCallback(value25,7), '.');
  console.log('Now fill out this worksheet.');
}

// Call your functions below:

 */

/* solution */

// Math Operations
function add(a, b){return a+b }
function subtract(a, b){return a-b }
function multiply(a, b){return a*b}
function divide(a, b){return a/b}
function wrongAdd(a, b){return (a+b)+''}

// Add your function type below:
type OperatorFunction = (num1:number,num2:number)=>number;

// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback:OperatorFunction) {
  console.log("Let's learn how to", operationCallback.name,'!');
  let value25 = operationCallback(2,5);
  console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
  console.log('When we', operationCallback.name, value25, 'and 7, we get', operationCallback(value25,7), '.');
  console.log('Now fill out this worksheet.');
}

// Call your functions below:
mathTutor(multiply)
mathTutor(wrongAdd)