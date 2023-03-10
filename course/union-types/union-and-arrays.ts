/* UNION TYPES
Unions and Arrays
Unions are even more powerful when used in combination with arrays.

For instance, we can represent time in TypeScript with a number or a string type. If we had a list of dates in both types, we’d need an array that allows for string and number values. Unions are here to help.

To create a union that supports multiple types for an array’s values, wrap the union in parentheses (string | number), then use array notation [].
 */
const dateNumber = new Date().getTime(); // returns a number
const dateString = new Date().toString(); // returns a string
 
const timesList: (string | number)[] = [dateNumber, dateString];
/* Above, the timesList variable is typed to allow string and number types as values in its array. If we try to add a value to timesList that is not either type, like with timesList.push(true), TypeScript would display an error that boolean types are not allowed inside timesList.

One last thing: the parentheses are vitally important to type arrays correctly. If we left out the parentheses and wrote string | number[], that type would allow strings or arrays of only numbers.

Instructions
1.
Inspect the program in the editor. This program has a function that takes home addresses and their respective prices, formats them, then returns them. If you hover over the listings parameter in formatListings(), the type of listings is inferred as any. Let’s type this parameter.

Look at the definition of formatListings(), then define a union array type on the listings parameter.

2.
Run tsc in the terminal to make sure there are no type errors. */

/**Original code
 * function formatListings(listings) {
  return listings.map((listing) => {
    if (typeof listing === 'string') {
      return listing.toUpperCase();
    }

    if (typeof listing === 'number') {
      return `$${listing.toLocaleString()}`;
    }
  });
}

const result = formatListings([
  '123 Main St',
  226800,
  '580 Broadway Apt 4a',
  337900,
]);

console.log(result);
 * 
 */

/**solution */

function formatListings(listings:(string | number)[]) {
    return listings.map((listing) => {
      if (typeof listing === 'string') {
        return listing.toUpperCase();
      }
  
      if (typeof listing === 'number') {
        return `$${listing.toLocaleString()}`;
      }
    });
  }
  
  const result = formatListings([
    '123 Main St',
    226800,
    '580 Broadway Apt 4a',
    337900,
  ]);
  
  console.log(result);

  