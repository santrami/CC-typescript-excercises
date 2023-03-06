/* CUSTOM TYPES
String Enums vs. Numeric Enums
The enums we have studied so far are referred to as numeric enums, since they are based on numbers. TypeScript also allows us to use enums based on strings, referred to as string enums. They are defined very similarly: */

enum DirectionNumber { North, South, East, West }
enum DirectionString { North = 'NORTH', South = 'SOUTH', East = 'EAST', West = 'WEST' }

/* With numeric enums, the numbers could be assigned automatically, but with string enums we must write the string explicitly, as shown above. Technically, any string will do: North = 'JabberWocky' is a valid value definition. However, it is much better to use the convention shown here (North = 'NORTH'), where the string value of the enum variable is just the capitalized form of the variable name. This way, error messages and logs will be much more informative.

We recommend to always use string enums because numeric enums allow for some behaviors that can let bugs sneak into our code. For example, numbers can be assigned directly to numeric enum variables:
 */
let whichWayToAntarctica1: DirectionNumber;
whichWayToAntarctica1 = 1; // Valid TypeScript code.
whichWayToAntarctica1 = DirectionNumber.South; // Valid, equivalent to the above line.
/* Strangely, even assigning arbitrary numbers, as in whichWayToAntarctica1 = 943205, will not lead to type errors.


String enums are much more strict. With string enums, variables cannot be assigned to strings at all! */

let whichWayToAntarctica2: DirectionString;
whichWayToAntarctica2 = '\ (•◡•) / Arbitrary String \ (•◡•) /'; // Type error!
whichWayToAntarctica2 = 'SOUTH'; // STILL a type error!
whichWayToAntarctica2 = DirectionString.South; // The only allowable way to do this.


/* Now, let’s practice. */

let petOnSale: Pet = Pet.Chinchilla;
let ordersArray = [
  ['rat', 2], 
  ['chinchilla', 1], 
  ['hamster', 2], 
  ['chinchilla', 50]
];


/*

1.
You will now revisit the pet shop example. But this time, you will use string enums instead of numeric enums.

Create a string enum named Pet, whose possible values are Pet.Hamster, Pet.Rat, Pet.Chinchilla, and Pet.Tarantula. (List them in this order.) Assign values according to the convention mentioned above, where the values are capitalized forms of the variable name: enum Example { variable = 'VARIABLE'};.

*/

// Write your code below:

enum Pet {
    Hamster = "HAMSTER",
    Rat = "RAT",
    Chinchilla = "CHINCHILLA",
    Tarantula = "TARANTULA"
  }

  /*
  
  2.
    Create the type-safe variable petOnSaleTS and assign to it the value Pet.Chinchilla. Make sure to explicitly include the correct type annotation for petOnSaleTS.
  
  */

    let petOnSaleTS: Pet = Pet.Chinchilla

/*

3.
As before, ordersArray is a list of orders to process, in the format [<pet name string>, <number ordered>]. This is not type safe.

Create the type safe version of this array, naming it ordersArrayTS. Pet names should be replaced by corresponding enum values. The number ordered should stay the same.

Include the type annotation for ordersArrayTS as well.

*/

let ordersArrayTS = [
    [Pet.Rat,2],
    [Pet.Chinchilla,1],
    [Pet.Hamster,2],
    [Pet.Chinchilla,50]
]

/*

4.
As discussed above, string enums are very particular about the form their values are written in. Even though you wrote Hamster = 'HAMSTER' in the enum Pet statement, you cannot use 'HAMSTER' as the enum value. You must use Pet.Hamster instead.

Demonstrate this fact by adding the code ordersArrayTS.push(['HAMSTER', 1]); and clicking “Run”. Then, run tsc in the terminal to make sure TypeScript does not allow this.

*/

ordersArrayTS.push(['HAMSTER', 1]);