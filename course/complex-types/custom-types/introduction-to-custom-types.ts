/* CUSTOM TYPES
Introduction
By now, you’ve covered a lot of TypeScript. You understand all of the types that TypeScript defines for you: primitive types and arrays. That’s a real accomplishment! But don’t rest on your laurels just yet though, because TypeScript can also be used to create custom types, rather than being limited to pre-defined types. Custom types are what make TypeScript really fun and useful, because they enable type checking that’s tailored to your exact purposes.

Actually, you have already studied an example of a custom type: tuples. For example, the tuple type [string, string, number, boolean] is a custom type that can be used with data about a website’s users: first name (string), last name (string), age (number), and whether they have a paid account (boolean).

Pre-defined types are like ingredients: they can be used on their own. Sometimes you just need a simple string and sometimes you just want to eat a pickle! However, pre-defined types can also be combined into custom types. Custom types are like fully assembled meals (pickles, as well as cheese, bread, and burger patties).

The complex types covered here will be usable in the same ways as the simpler types covered earlier. They can be used as type annotations during variable declaration: */

interface compType{
    firstName: string;
    secondName: string;
}

let myVar: compType; 
/* And they can be used as type annotations for functions: */

function testFn(param: compType): returnedCompType {
  /*Function body*/
}
/* And you can even do type inference with complex types: */

let inferredTypeVariable = testFn(myVar);
// The variable inferredTypeVariable will have the type returnedCompType. 
/* So without further ado, let’s jump into our first complex type. */