/*

Documenting Functions
TypeScript recognizes JavaScript comment syntax:

*/

// This is a single line comment 
 
/*
This is a 
multiline
comment
*/

/*

But it’s common in TypeScript to see a third comment style: documentation comments. A documentation comment is denoted with the first line /** and a final line */

//. It's common for each line within the comment to start with an asterisk (*):

/**
* This is a documentation comment
*/

/* 

Documentation comments are especially useful for documenting functions. We place a function’s documentation comment in the code directly above the function declaration. We can use special tags within the comment to highlight certain aspects of the function. We can use @param to describe each of the function’s parameters, and we can use @returns to describe what the function returns:

*/

 /**
   * Returns the sum of two numbers.
   *
   * @param x - The first input number
   * @param y - The second input number
   * @returns The sum of `x` and `y`
   *
   */
 function getSum(x: number, y: number): number {
    return x + y;
  }

  /* excercise */

  /** 
 * logs a salad
 * 
 * @param fruit1 - first fruit
 * @param fruit2 - second fruit
 * @returns nothing (void)
 * 
*/

function makeFruitSalad(fruit1: string, fruit2: string): void {
    let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2+ fruit1 + fruit1;
    console.log(salad);
  }
  
  /** 
   * logs the status of something
   * 
   * @param status - the string that describes the status
   * @param repeat - how much times repeat the status
   * @returns nothing (void)
   *  
  */
  
  
  function proclaim(status = 'not ready...', repeat = 1) {
    for (let i = 0; i < repeat; i += 1) {
      console.log(`I'm ${status}`);
    }
  }