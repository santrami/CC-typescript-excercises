/*
Optional Parameters
TypeScript normally gives an error if we don’t provide a value for all arguments in a function. This isn’t always desirable; sometimes we’d like to skip providing values.
*/

function greet(name: string) {
  console.log(`Hello, ${name || "Anonymous"}!`);
}

greet("Anders"); // Prints: Hello, Anders!
greet(); // TypeScript Error: Expected 1 arguments, but got 0.

/*
  
    When the code snippet above is compiled to JavaScript, the greet() function will correctly print 'Hello, Anonymous!'. That’s because when no arguments are passed in, name has the falsy value undefined, which means that name || 'Anonymous' evaluates to 'Anonymous'. Since the final code works as intended, we want to prevent TypeScript from throwing errors:

    To indicate that a parameter is intentionally optional, we add a ? after its name. This tells TypeScript that the parameter is allowed to be undefined and doesn’t always have to be provided.
*/

function greet(name?: string) {
    console.log(`Hello, ${name|| 'Anonymous'}!`);
  }
   
  greet(); // Prints: Hello, Anonymous!