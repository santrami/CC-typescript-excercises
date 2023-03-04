/* Multi-dimensional Arrays
So far we’ve looked at string[] arrays, but we could also have arrays that only contain numbers (number[]) or booleans (boolean[]). In fact, we can make arrays of any type whatsoever. We can also declare multidimensional arrays: arrays of arrays (of some type). */

let arr: string[][] = [['str1', 'str2'], ['more', 'strings']];

/* Think of the string[][] above as short for (string[])[], that is, an array where every element has type string[]. We’ll explore more complex array types in later lessons. 

The empty array ([]) is compatible with any array type:
*/


let names5: string[] = []; // No type errors.
let numbers: number[] = []; // No type errors.
names.push('Isabella');  
numbers.push(30);

/* Practice time!

Instructions
1.
Please provide type annotations for all the arrays provided in the // Multidimensional arrays: section. */

// Arrays:
let bestNumbers1: number[] = [7,77,4];
let bestLunches1: string[] = ['chicken soup', 'non-chicken soup'];
let bestBreakfasts1: string[]= ['fasting', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
let bestBooleans1: boolean[] = [true, false];

// Multidimensional Arrays:
let bestMealPlan:string[][] = [bestLunches1, bestBreakfasts1, ['baked potato', 'mashed potato']];
let bestBooleansTwice:boolean[][] = [bestBooleans1, bestBooleans1];
let numbersMulti:number[][][] = [ [[1],[2,3]], [[7],bestNumbers1] ];