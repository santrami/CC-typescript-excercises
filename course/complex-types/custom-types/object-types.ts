/* CUSTOM TYPES
Object Types
It’s time, we can finally discuss object-oriented programming and how it relates to TypeScript! TypeScript’s object types are extremely useful, as they allow us extremely fine-level control over variable types in our programs. They’re also the most common custom types, so we’ll have to understand them if we want to read other people’s programs.

Here’s a type annotation for an object meant to represent a person: */

let aPerson: { name: string; age: number };

/* The type annotation looks like an object literal, but instead of values appearing after properties, we have types. Notice that the variable aPerson has yet to be assigned a value. Trying to assign a value to aPerson that doesn’t have name and age properties of the specified types will lead to a type error:
 */
aPerson = { name: "Aisle Nevertell", age: "wouldn't you like to know" }; // Type error: age property has the wrong type.
aPerson = { name: "Kushim", yearsOld: 5000 }; // Type error: no age property.
aPerson = { name: "User McCodecad", age: 22 }; // Valid code.

/* Above, in the case of Kushim, the object had properties of the correct types. Still, a type error was thrown because the properties didn’t have the correct names. 

TypeScript places no restrictions on the types of an object’s properties. They can be enums, arrays, and even other object types!
*/
let aCompany: {
  companyName: string;
  boss: { name: string; age: number };
  employees: { name: string; age: number }[];
  employeeOfTheMonth: { name: string; age: number };
  moneyEarned: number;
};
/*
This is only an introduction to TypeScript’s object types. A thorough description would deserve a lesson of its own (which we will soon arrive at if we keep learning). For now, let’s practice the basics some more. */

/*excercise*/

/*

1.
When we write functions, we like to give arguments explanatory names, which help the programmer using the function. For example, the arguments in function sayHappyBirthday(name, age) suggest that sayHappyBirthday('Cody', 10) will be valid input. However, sometimes you will encounter code where data is passed into a function by using an object, as with sayHappyBirthdayWithObject() in the code editor.

The problem is, sayHappyBirthdayWithObject(personObject) is not very explanatory. Here, TypeScript can help us specify the exact properties that personObject should contain for the function to work.

Add a type annotation to the personObject parameter that will ensure that the function will always receive an object with the required properties.

given code: 

function sayHappyBirthdayWithObject(personObject){
  let output ='';
  output += 'Happy Birthday '
         + personObject.name + '! ';
  output += 'You are now ' 
         + personObject.age + ' years old! ';
  output += 'Your birthday wish was to receive ' 
         + personObject.giftWish 
         + '. And guess what? You will ';
  if (!personObject.success){
    output += 'not ';
  }
  output += 'receive it! \n';
  console.log(output);
}

point 2: 

2.
The code editor defines the variable birthdayBabies without a type annotation. Please add in the correct type annotation yourself.

given code:
let birthdayBabies = [
  {name: 'Liam', age: 0, giftWish: 'karate skills', success: false}, 
  {name: 'Olivia', age: 0, giftWish: 'a bright future', success:true}, 
  {name: 'Ava', age: 0, giftWish: '$0.25', success:true}
]; 

*/

/* solution */

function sayHappyBirthdayWithObject(personObject: { name: string, age: number, giftWish: string, success: boolean }) {
    let output = '';
    output += 'Happy Birthday '
      + personObject.name + '! ';
    output += 'You are now '
      + personObject.age + ' years old! ';
    output += 'Your birthday wish was to receive '
      + personObject.giftWish
      + '. And guess what? You will ';
    if (!personObject.success) {
      output += 'not ';
    }
    output += 'receive it! \n';
    console.log(output);
  }
  
  let birthdayBabies: { name: string, age: number, giftWish: string, success: boolean }[] = [
    { name: 'Liam', age: 0, giftWish: 'karate skills', success: false },
    { name: 'Olivia', age: 0, giftWish: 'a bright future', success: true },
    { name: 'Ava', age: 0, giftWish: '$0.25', success: true }
  ];
  
  birthdayBabies.forEach(sayHappyBirthdayWithObject);