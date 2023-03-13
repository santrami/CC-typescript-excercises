/* TYPE NARROWING
Using in with Type Guards
As we write more types, we’re bound to create custom types to better describe our data’s properties and methods. While using typeof can get us pretty far, sometimes we want to see if a specific method exists on a type instead of a type like 'string'. That’s where the in operator comes into play. The in operator checks if a property exists on an object itself or anywhere within its prototype chain. Take a look at this example: */

type Tennis = {
  serve: () => void;
}
 
type Soccer = {
  kick: () => void;
}
 
function play(sport: Tennis | Soccer) {
  if ('serve' in sport) {
    return sport.serve();
  }
 
  if ('kick' in sport) {
    return sport.kick();
  }
}
/* In the example above, we check if the 'serve' property exists on sport with the in operator. The 'serve' property must exist inside the conditional, so TypeScript can narrow sport‘s type inside the conditional to be of type Tennis. This type narrowing is possible because TypeScript recognizes in as a type guard.

Instructions
1.
In the code editor, there are two types: Cat and Fish. Underneath the types are variables for each: siameseCat and bettaFish. Finally, there’s a move() function that takes a pet as its argument. Ultimately, we want the move() function to call the correct movement method on pet.

Currently our code has a TypeScript error because we’re calling .run() on pet inside the move() function. Let’s fix it.

Start by writing a type guard using in inside the move() function that checks if 'run' exists on pet. If it does, then return the value of pet.run().

2.
The previous checkpoint takes care of Cat types. Now let’s handle Fish types.

Write another type guard using the in operator inside the body of the move() function. This type guard should check if the property 'swim' exists on pet. If it does, then return pet.swim().

3.
Run tsc in the terminal to compile your code. There should be no errors, even though methods we called on pet do not exist on both Cat and Fish types, since TypeScript was able to type narrow.

4.
Run your compiled code with node index.js. You should see pitter pat as the output if you called move() with siameseCat or bubble blub if you called move() with bettaFish. */

/**given code
 * 
 * type Cat = {
  name: string;
  run: () => string;
}

type Fish = {
  name: string;
  swim: () => string;
}

const siameseCat = { 
  name: 'Proxie', 
  run: () => 'pitter pat'
}

const bettaFish = { 
  name: 'Neptune', 
  swim: () => 'bubble blub'
}

function move(pet: Cat | Fish) {
  return pet.run();
}

console.log(move(siameseCat))
 * 
 */

/**SOLUTION */

type Cat = {
  name: string;
  run: () => string;
}

type Fish = {
  name: string;
  swim: () => string;
}

const siameseCat = { 
  name: 'Proxie', 
  run: () => 'pitter pat'
}

const bettaFish = { 
  name: 'Neptune', 
  swim: () => 'bubble blub'
}

function move(pet: Cat | Fish) {
  if('run' in pet){
    return pet.run();
  }
  if('swim' in pet){
    return pet.swim();
  }
}

console.log(move(siameseCat))