/* CUSTOM TYPES
Enums
Our first example of a complex type is also one of the most useful: enums. We use enums when we’d like to enumerate all the possible values that a variable could have. This is in contrast to most of the other types we have studied. A variable of the string type can have any string as a value; there are infinitely many possible strings, and it would be impossible to list them all. Similarly, a variable of the boolean[] type can have any array of booleans as its value; again, the possibilities are infinite. */

enum Direction {
  North,
  South,
  East,
  West,
}
/* There are many situations when we might want to limit the possible values of a variable. For example, the code above defines the enum Direction, representing four compass directions: Direction.North, Direction.South, Direction.East, and Direction.West. Any other values, like Direction.Southeast, are not allowed. Check out the example below:
 */
let whichWayToArcticOcean: Direction;
whichWayToArcticOcean = Direction.North; // No type error.
whichWayToArcticOcean = Direction.Southeast; // Type error: Southeast is not a valid value for the Direction enum.
whichWayToArcticOcean = West; // Wrong syntax, we must use Direction.West instead.
/* As shown above, an enum type can be used in a type annotation like any other type.

Under the hood, TypeScript processes these kinds of enum types using numbers. Enum values are assigned a numerical value according to their listed order. The first value is assigned a number of 0, the second a number of 1, and onwards

For example, if we set whichWayToArticOcean = Direction.North, then whichWayToArticOcean == 0 evaluates to true. Furthermore, we can reassign whichWayToArticOcean to a number value, like whichWayToArticOcean = 2, and it does not raise a type error. This is because Direction.North, Direction.South, Direction.East, and Direction.West are equal to 0, 1, 2, and 3, respectively.

We can change the starting number, writing something like */

enum Direction {
  North = 7,
  South,
  East,
  West,
}
/* Here, Direction.North, Direction.South, Direction.East, and Direction.West are equal to 7, 8, 9, and 10, respectively.

We can also specify all numbers separately, if needed:
 */
enum Direction {
  North = 8,
  South = 2,
  East = 6,
  West = 4,
}
/* (These numbers match up with the keys on the numpad portion of many keyboards.) */

/*

Let’s get some practice with TypeScript’s enums.

Instructions
1.
Potent Rodent is a pet shop with a very limited supply. The entire stock of animals consists of hamsters, rats, chinchillas, and tarantulas. Your job is to improve their order-processing code by making it type safe.

Create an enum named Pet, whose possible values are Pet.Hamster, Pet.Rat, Pet.Chinchilla, and Pet.Tarantula. Please list them in the order given here, and don’t bother assigning their numeric values yourself—let TypeScript do it automatically.

Checkpoint 2 Passed

Stuck? Get a hint
2.
You may have noticed that the variable petOnSale is not type safe: a wayward coder could assign to it an unacceptable value like petOnSale = 'Ox'!

Create a better, type safe variable petOnSaleTS and assign to it the value Pet.Chinchilla. Make sure to explicitly include the correct type annotation for petOnSaleTS on the same line.

Checkpoint 3 Passed

Stuck? Get a hint
3.
The array ordersArray is a list of orders to process, in the format [<pet name string>, <number ordered>]. (Why did someone order 50 chinchillas?) This is clearly not type safe by any stretch of the imagination.

Create the type safe version of this array, naming it ordersArrayTS. Pet names should be replaced by corresponding enum values. The number ordered should stay the same.

Don’t do the type annotation just yet, we’ll get to that in a moment.

Checkpoint 4 Passed

Stuck? Get a hint
4.
Now that you have created ordersArrayTS and assigned its value, go back and add the appropriate type annotation. Note that ordersArrayTS is an array of tuples, so the type annotation should reflect that fact.

Checkpoint 5 Passed

Stuck? Get a hint
5.
Now that we have a type safe orders array, let’s see what happens when someone tries to order a pet that the shop does not carry. Attempt to add an order for 3 jerboas by adding the code ordersArrayTS.push([Pet.Jerboa, 3]); and clicking the “Run” button.

Then, run tsc in the terminal to make sure TypeScript does not allow this push.

*/

let petOnSale = 'chinchilla';
let ordersArray = [
  ['rat', 2], 
  ['chinchilla', 1], 
  ['hamster', 2], 
  ['chinchilla', 50]
];

// Write your code below:
enum Pet {
  Hamster,
  Rat,
  Chinchilla,
  Tarantula
}

let petOnSaleTS:Pet=Pet.Chinchilla;

let ordersArrayTS:[Pet,number][] = [
  [Pet.Rat,2],
  [Pet.Chinchilla,1],
  [Pet.Hamster,2],
  [Pet.Chinchilla,50]
]

ordersArrayTS.push([Pet.Jerboa, 3]);