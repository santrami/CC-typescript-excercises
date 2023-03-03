/*
Inferring Return Types
TypeScript can also infer the types of values returned by functions. It does this by looking at the types of the values after a function’s return statements.
*/

function createGreeting(name: string) {
  return `Hello, ${name}!`;
}

const myGreeting = createGreeting("Aisle Nevertell");

/* 

    Here’s how TypeScript can infer myGreeting above to be of type string:

    createGreeting()’s return statement is followed by a string variable, so createGreeting() is inferred to return string.
    createGreeting('Aisle Nevertell') therefore must result in a value of type string.
    myGreeting is initialized to createGreeting('Aisle Nevertell'), which is a value with the type string.
    Cool! Let’s see how this can help us fix bugs:
*/

function ouncesToCups(ounces: number) {
    return `${ounces / 16} cups`;
  }
   
  const liquidAmount: number = ouncesToCups(3);
  // Type 'string' is not assignable to type 'number'.

  /*
  
  Here, TypeScript was able to infer that liquidAmount was being assigned a value of type string, despite it being declared as a variable of type number. This correctly results in an error being surfaced.
  
  */