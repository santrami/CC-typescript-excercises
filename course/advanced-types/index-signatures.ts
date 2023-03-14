/* ADVANCED OBJECT TYPES
Index Signatures
When typing objects in TypeScript, sometimes it’s not possible to know the property names for an object, like when we get back information from an outside data source/API. While we may not know the exact property names at compile-time, we may know what the data will look like in general. In that case, it’s useful to write an object type that allows us to include a variable name for the property name. This feature is called index signatures.

Imagine we query a map API to get a list of latitudes where a solar eclipse can be viewed. The data might look like: */

{
  '40.712776': true;
  '41.203323': true;
  '40.417286': false;
}
/* We know that all the property names will be strings, and all their values will be booleans, but we don’t know what the property names will be. To type this object, we can utilize an index signature to type this object. We could write this object’s type like this: */

interface SolarEclipse {
  [latitude: string]: boolean;
} 
/* In the SolarEclipse type, there’s an index signature used for defining a variable property name of each type member. The [latitude: string] syntax defines every property name within SolarEclipse as a string type with a value of type boolean. In the [latitude: string] syntax, the latitude name is purely for us, the developer, as a human-readable name that will show up in potential error messages later.

Instructions
1.
In the code editor, there’s a program that calls a budget API to get your current month’s budget by category. Your goal is to give the result variable the appropriate type inside the getBudget() function.

The call to getBudgetAsync() will return data that looks similar to this:
 */
{
  'shopping': 150,
  'food': 210,
  'utilities': 100
}
/* The data from getBudgetAsync() could return different names for each category.

Declare an interface named Budget. Use an index signature to make all of its type members have property names of a variable category typed as a string with each key’s value typed as a number.

2.
Apply the Budget interface to the result variable inside the getBudget() function.

3.
In the terminal run tsc to compile your code.

4.
Now run node index.js in the terminal. You should see this month’s budget as the output. */

/*given code

import { getBudgetAsync } from './api';

// Write an interface here


async function getBudget() {
  const result = await getBudgetAsync();
  console.log(result);
}

getBudget();

*/

/* SOLUTION */

import { getBudgetAsync } from './api';

// Write an interface here
interface Budget {
  [category:string]: number;
}

async function getBudget() {
  const result:Budget = await getBudgetAsync();
  console.log(result);
}

getBudget();