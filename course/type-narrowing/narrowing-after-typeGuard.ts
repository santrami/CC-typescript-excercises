/* TYPE NARROWING
Narrowing After a Type Guard
TypeScript’s ability to infer types after a type guard stretches even further than inferring the type within an else statement. TypeScript can also type narrow without an else statement, provided that there’s a return statement within the type guard. Take a look at this example: */

type Tea = {
  steep: () => string;
}
 
type Coffee = {
  pourOver: () => string;
} 
 
function brew(beverage: Coffee | Tea) {
  if ('steep' in beverage) {
    return beverage.steep();
  }
 
  return beverage.pourOver();
}
/* In the conditional, we immediately return beverage.steep(). Once we encounter a return statement, the function execution stops. Any code that was meant to work with a beverage of type Tea will be executed and returned within the conditional. TypeScript then infers that the code following the conditional must be of type Coffee.

Instructions
1.
In the editor, we’ve created a program that recycles variables of type Metal and Glass. The goal of the program is to sort out the trash of type Metal before the trash of type Glass.

Right now, the recycle() function calls the .melt() method on each piece of trash. Let’s give the recycle() function the ability to sort out pieces of trash of type Metal.

In the body of the recycle() function, write a type guard that checks if there is a .magnetize() method on the trash parameter. If there is, then return trash.magnetize(). Your type guard should appear above the trash.melt() call.

2.
Run tsc in the terminal to compile your code.

3.
Run your compiled code with node index.js. You should see a message about the status of the recycling machine print as the output. */

/*GIVEN CODE

type Metal = {
  magnetize: () => string;
}

type Glass = {
  melt: () => string;
}

const iron = {
  magnetize: () => 'Electromagnet activated'
}

const bottle = {
  melt: () => 'Furnace set to 2,700 degrees'
}


function recycle(trash: Metal | Glass) {
  // Add your code below:
  
  
  return trash.melt();
}

console.log(recycle(iron));

*/

/*SOLUTION */

