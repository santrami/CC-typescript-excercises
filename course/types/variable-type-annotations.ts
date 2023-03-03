/*Variable Type Annotations
In some situations, we’d like to declare a variable without an initial value while still ensuring that it will only ever be assigned values of a certain type. If left as any, TypeScript won’t be able to protect us from accidentally assigning a variable to an incorrect type that could break our code.

We can tell TypeScript what type something is or will be by using a type annotation.

Variables can have type annotations (also known as type declarations) added just after their names. We provide a type annotation by appending a variable with a colon (:) and the type (e.g., number, string, or any).*/

let mustBeAString : string;
mustBeAString = 'Catdog';
 
mustBeAString = 1337;
// Error: Type 'number' is not assignable to type 'string'

/*In the code above, we explicitly declare mustBeAString to be of type string without assigning it an initial value. This enables us to assign it the value 'Catdog' without complaint, but when we later attempt to assign it a numerical value, TypeScript will give us an error message telling us that a number is being improperly assigned to a variable of type string.

We’re becoming familiar with how useful type annotations can be! Some developers may find that type annotations make the code wordy or hard for others to understand, however, they get automatically removed when compiled to JavaScript. */