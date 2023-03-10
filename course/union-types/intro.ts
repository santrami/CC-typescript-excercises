/* UNION TYPES
Introduction
TypeScript lets us type variables with different levels of type specificity. If we want to enforce that a variable is a string, we can type it as a string. This type is very specific since TypeScript will only allow the variable to have a string value.

On the other end of the specificity spectrum, we could type a variable as any. This type is very unspecific. TypeScript will allow a value of any type to be assigned without complaining and throwing an error.

These two levels of type specificity work for many parts of our programs. However, sometimes we need to strike a balance between extreme specificity and being totally unspecific with our types. Imagine that we have to write a program that takes in an employee’s ID, then prints the ID to the console. The catch is that an employee’s ID could be a string or a number. Since we need our ID variable to allow more than one type, we could use an any type, like this:
 */
let ID: any;
 
console.log(`The ID is ${ID}.`);

/* The problem with the any type is that any value might not work with our program. To solve this problem, TypeScript allows us to be flexible with how specific our types are by combining different types. When we combine types, it is called a union. */