/* CUSTOM TYPES
Type Aliases
One great way to customize the types in our programs is to use type aliases. These are alternative type names that we choose for convenience. We use the format type <alias name> = <type>: */

type MyString2 = string;
let myVar: MyString = 'Hi'; // Valid code.

/* Coming up with alternate names for string may not be very useful, but this can be done with any type whatsoever. Type aliases are truly useful for referring to complicated types that need to be repeated, especially object types and tuple types. Recall our earlier company example: */

let aCompany2: { 
  companyName: string, 
  boss: { name: string, age: number }, 
  employees: { name: string, age: number }[], 
  employeeOfTheMonth: { name: string, age: number },  
  moneyEarned: number
};
/* There’s so much needless repetition here! (And the more times we repeat something, the more opportunity there is for typos.) This can be cleaned up with type aliases: */

type Person = { name: string, age: number };
let aCompany3: {
  companyName: string, 
  boss: Person, 
  employees: Person[], 
  employeeOfTheMonth: Person,  
  moneyEarned: number
};
/* Everyone knows the famous Shakespeare quotation “What’s in a name? That which we call a string by any other name would smell as sweet”. TypeScript aliases are nothing more than names. They have absolutely no influence over how types work. For example, the following code does not lead to type errors: */

type MyString = string; 
type MyOtherString = string;
let firstString: MyString = 'test';
let secondString: MyOtherString = firstString; // Valid code.

/* The reason this works is that MyString and MyOtherString are not distinct types. They are just alternative names for the same thing.

Using type aliases, we can make our code much simpler to understand. Let’s give it a try! */

/**excercise
 * type aliases
 * 
 * 1.
In the code editor, you should see something familiar. This code was the “improved” version of the navigation example in a previous lesson. Here, we can improve it even more by replacing a long, awkward type annotation with a short, supple type alias.

First, create the type alias Coord to stand for the coordinate tuple type. It should be of the same type as codecademyCoordinates and bermudaTCoordinates.

given code: 

// Add your type alias below:

let codecademyCoordinates: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates: [number, number, string, number, number, string] = [25, 0 , 'N' , 71, 0, 'W'];


2.
Now, replace the old, long type annotations for codecademyCoordinates and bermudaTCoordinates with annotations that use your new type alias.

 */

/* solution */

type Coord = [ number, number, string, number, number, string ]

let codecademyCoordinates: Coord = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates: Coord = [25, 0, 'N', 71, 0, 'W'];
