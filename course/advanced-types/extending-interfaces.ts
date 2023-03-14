/* ADVANCED OBJECT TYPES
Extending Interfaces
In TypeScript, it’s not always enough to be able to compose types together. Sometimes it’s convenient to copy all the type members from one type into another type. We can accomplish this with the extends keyword, like in this example: */

interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

const mySquare: Square = { sideLength: 10, color: "blue" };
/* In this example, the Square interface uses the extends keyword to copy all the type members from Shape into Square. Therefore, when we declare a variable like mySquare, both a .sideLength property with type number and a .color property of type string is required.

Using extends can help us organize our code by abstracting out common type members into their own interface, then copying them into more specific types.

Instructions
1.
In the editor, there’s code that defines a Developer interface and a me object. If you hover your mouse over the name property inside the me object, you’ll see a TypeScript error that the name property does not exist on Developer, which is true. While me is a Developer, we also want me to be Human, which should have name and hobbies properties. Let’s fix this code.

Declare an interface named Human, and give it two type members: name typed as a string and hobbies typed as string[].

2.
Add the members from Human to the Developer interface using the extends keyword.

3.
Let’s see if the extends implementation worked. In the terminal run tsc to compile your code.

4.
Run node index.js in the terminal to see the output. The output should show the result of the code() method. */

/* Given code 

interface Developer {
  code: () => void;
}

// Add your interface here


const me: Developer = { 
  code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
  name: 'Corrina', 
  hobbies: ['Building rockets']
}

me.code();

*/

/* SOLUTION */

interface Developer extends Human {
  code: () => void;
}

// Add your interface here
interface Human {
  name: string;
  hobbies: string[];
}

const me: Developer = {
  code: () => console.log("Headphones on. Coffee brewed. Editor open."),
  name: "Corrina",
  hobbies: ["Building rockets"],
};

me.code();
