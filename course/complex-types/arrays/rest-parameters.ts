/* ARRAYS
Rest Parameters
Assigning types to rest parameters is similar to assigning types to arrays. Here’s a rest parameter example without types: */

function smush(firstString, ...otherStrings){
  let output = firstString;
  for(let i = 0; i < otherStrings.length; i++){
    output = output.concat(otherStrings[i]);
  }
  return output;
}
/* This function concatenates all of its arguments. For example, calling: smush('hi ', 'there') returns the value 'hi there'.” The rest parameter otherStrings lets the function work with any number of parameters greater than zero: */

smush('a','h','h','H','H','H','!','!'); // Returns: 'ahhHHH!!'.

/* The function works well, but it is not type safe. We don’t want a misguided coder to make a mistake like smush(1,2,3), when that would cause an error. TypeScript to the rescue! Type annotations for a rest parameter are identical to type annotations for arrays. The function with a correctly typed rest parameter is then: */

function smush1(firstString, ...otherStrings: string[]){
  /*rest of function*/
}
/* With this change, TypeScript will treat otherStrings as an array of strings. This means that smush(1,2,3) will result in a type error because [2,3] is not an array of strings. */