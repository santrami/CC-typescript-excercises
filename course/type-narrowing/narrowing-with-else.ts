/* TYPE NARROWING
Narrowing with else
In our previous examples, we’ve used two separate if statements as type guards to handle each possible type. It turns out that TypeScript can recognize the else block of an if/else statement as being the opposite type guard check of the if statement’s type guard check. For example: */

function formatPadding(padding: string | number) {
  if (typeof padding === 'string') {
    return padding.toLowerCase();
  } else {
    return `${padding}px`;
  }
}
/* In the example above, the formatPadding() function can take in a value for CSS padding like the number 32 or the string '0 32px'. Then a type guard is used to figure out how to format the padding argument.

The type guard typeof padding === 'string' tells TypeScript that padding within the if statement’s block must be a string. Going further, TypeScript is also able to infer that, since the padding argument is typed as the union string | number, that padding must be a number type within the else block.

Since TypeScript can understand how our code will work at runtime, it’s able to infer specific types for us, like with the else of an if/else statement.

Instructions
1.
In the code editor, there’s a function named prepareEntree() that takes an argument named entree. This function should provide instructions on how to prepare two kinds of dishes, either Meat or Pasta entrees (for the particularly famished, we could prepare both).

Currently our code is calling .boil() on every entree. This method call is an issue because entrees of type Meat do not have a .boil() method and TypeScript will complain.

In the body of the prepareEntree() function, write a type guard using the in operator. Check if the 'boil' property exists on the entree variable. If it does, then return the value of entree.boil(), since that entree must be of type Pasta.

2.
Now we’d like to perform separate logic for an entree of type Meat, like steak.

Instead of writing another separate type guard, add an else statement to the if conditional you wrote in the last step. Inside the else block, return the result of entree.panFry().

3.
Run tsc in the terminal to compile your code.

4.
Run your compiled code with node index.js. You should see entree preparation instructions print to the console as the output. */

/*GIVEN CODE 

type Pasta = {
  menuName: string;
  boil: () => string;
}

type Meat = {
  menuName: string;
  panFry: () => string;
}

const fettuccine = {
  menuName: 'Fettuccine',
  boil: () => 'Heat water to 212 degrees',
}

const steak = {
  menuName: 'New York Strip Steak',
  panFry: () => 'Heat oil to 350 degrees',
}

function prepareEntree(entree: Pasta | Meat) {
  return entree.boil();
}

console.log(prepareEntree(fettuccine));

*/

/*SOLUTION */

type Pasta = {
    menuName: string;
    boil: () => string;
  }
  
  type Meat = {
    menuName: string;
    panFry: () => string;
  }
  
  const fettuccine = {
    menuName: 'Fettuccine',
    boil: () => 'Heat water to 212 degrees',
  }
  
  const steak = {
    menuName: 'New York Strip Steak',
    panFry: () => 'Heat oil to 350 degrees',
  }
  
  function prepareEntree(entree: Pasta | Meat) {
    if('boil' in entree){
      return entree.boil();
    }else {
      return entree.panFry()
    }
  }
  
  console.log(prepareEntree(fettuccine));