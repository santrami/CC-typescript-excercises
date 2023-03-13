/* Interfaces and Types
In TypeScript, we can define types in a variety of ways to fit our code. We’ve used the type keyword to define types, however, there’s another way to define types with the interface keyword.

Here’s a type that you’ve seen before: */

type Mail = {
  postagePrice: number;
  address: string;
}
 
const catalog: Mail = ...
/* And here is an identical type that utilizes interface:
 */
interface Mail {
  postagePrice: number;
  address: string;
}
 
const catalog: Mail = ...
/* In this example, we used both a type and an interface to create a typed object named Mail. The syntaxes for type and interface are slightly different, since interface does not require an equals sign (=) before the typed object. Functionally, the two Mail types in the example are identical: both will enforce the typed object at compile time when typing a variable.

The biggest difference between interface and type is that interface can only be used to type objects, while type can be used to type objects, primitives, and more. As it turns out, type is more versatile and functional than interface. So why would we use interface?

Sometimes, we don’t want a type that can do everything. We’d like our types to be constrained so we’re more likely to write consistent code. Since interface may only type objects, it’s a perfect match for writing object-oriented programs because these programs need many typed objects. So, let’s get started writing types with interface.

Instructions
1.
In the code editor, there’s a program that will show progress on a monthly running goal. This month’s running goal is 50 miles (~80km). The updateRunGoal() takes in a run argument and displays stats about this month’s running goal. This program works right now, but we need to add a type to run since run is of type any at the moment.

At the top of index.ts, declare an interface named Run with one type member: miles: number;.

2.
Apply the Run interface to the run parameter.

3.
In the terminal run tsc to compile your code.

4.
Finally, run node index.js in the terminal to see the output. You should see some stats about a monthly running goal. */

/*GIVEN CODE 

function updateRunGoal(run) {
  console.log(`
Miles left:       ${50 - run.miles}
Percent of goal:  ${(run.miles / 50) * 100}% complete
  `)
}

updateRunGoal({
  miles: 5,
})

*/

/**SOLUTION */

// Write an interface here
interface Run {
    miles:number;
  }
  
  function updateRunGoal(run: Run) {
    console.log(`
  Miles left:       ${50 - run.miles}
  Percent of goal:  ${(run.miles / 50) * 100}% complete
    `)
  }
  
  updateRunGoal({
    miles: 5,
  })