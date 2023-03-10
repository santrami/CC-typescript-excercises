/* CUSTOM TYPES
Generic Functions
We can also use generics to create collections of typed functions. Generic functions like these are probably easiest to understand via an example. And for once, the example is actually useful! Imagine we wanted to create a function that returns arrays filled with a certain value. Let’s just write the JavaScript for now: */

function getFilledArray1(value, n) {
  return Array(n).fill(value);
}
/* Here, getFilledArray('cheese', 3) evaluates to ['cheese', 'cheese', 'cheese']. No problem, right? Well, we run into a problem when we try to specify the function’s return type. We know it should be an array of whatever value‘s type is—do we have to write a separate type annotation for every type of value? Nope. Here, we are rescued by generic functions! */

function getFilledArray2<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}
/* The above code tells TypeScript to make sure that value and the returned array have the same type T. When the function is invoked, we will provide T‘s value. For example, we can invoke the function using getFilledArray<string>('cheese', 3), which sets T equal to string. This still evaluates to ['cheese', 'cheese', 'cheese'], but the function is now correctly typed and less prone to errors. The function getFilledArray<string> is precisely the same as if we had written (value: string, n: number): string[] in its type annotation.

In general, writing generic functions with function functionName<T> allows us to use T within the type annotation as a type placeholder. Later, when the function is invoked, T is replaced with the provided type.

Wow! Let’s practice generic functions.

Instructions
1.
Use the function getFilledArray<T>() to assign values to the variables stringArray, numberArray, personArray, and coordinateArray.

Write your code so that:

Each value should be an array of 6 elements.
All elements in stringArray should equal 'hi'.
All elements in numberArray should equal 9.
All elements in personArray should equal {name: 'J. Dean', age: 24}.
All elements in coordinateArray should equal [3,4].
Don’t forget to specify the value of T!

Hint
Every time you use the generic function getFilledArray<T>(), you need to specify the value of T. For example, if you wanted an array of 4 copies of the tuple ['cheese', true], you would write:

getFilledArray<[string, boolean]>(['cheese', true], 4)
This is because getFilledArray<[string, boolean]> is exactly the same as writing the function with the following type annotation:

getFilledArray(value: [string, boolean], n: number): [string, boolean][] */

/*
given code: 

*/

function getFilledArray<T>(value: T, n: number): T[] {
    return Array(n).fill(value);
  }
  
  let stringArray: string[];
  let numberArray: number[];
  let personArray: {name: string, age: number}[];
  let coordinateArray: [number, number][];

  // Write your code below:
stringArray=getFilledArray<string>("hi",6);
numberArray=getFilledArray<number>(9,6);
personArray=getFilledArray<{name:string,age:number}>({name:"J. Dean",age:24},6);
coordinateArray= getFilledArray<[number,number]>([3,4],6)