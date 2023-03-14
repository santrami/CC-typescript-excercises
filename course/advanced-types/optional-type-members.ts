/* ADVANCED OBJECT TYPES
Optional Type Members
A common scenario in programming is creating a function or class that can take in many arguments, some of which are required, and some that are optional. Every interface within this lesson so far assumes that every type member is required, however, TypeScript allows us to make some type members optional. Take a look at this code: */

interface OptionsType {
  name: string;
  size?: string;
}
 
function listFile(options: OptionsType) {
  let fileName = options.name;
 
  if (options.size) {
    fileName = `${fileName}: ${options.size}`;
  }
 
  return fileName;
}
/* In the example, OptionsType has an optional type member named size. We can denote any type member as optional using the ? operator after the property name and before the colon (:), like this: size?: string;. Since .size is optional, we added a conditional to check if it exists before trying to use the .size property.

The optional parameter allows us to call listFile() with a parameter that does not include a size property at all, like this: */

listFile({ name: 'readme.txt' })
/* Optional type members in TypeScript allow us to create programs that don’t require us to pass in every possible key-value pair, making our programs more concise and easier to reason about.

Instructions
1.
When creating an app or website, it’s typical that some users might have a first name and last name set, while other users might only have a username. In the code editor, there’s a getUserName() function that checks if a user has both a first and last name. If they do, it returns their full name. If not, it will return their user’s username.

Currently the options parameter on getUserName() is of type any. Let’s give it a type.

Declare an interface at the top of the file named UserNameOptions. It should have three type members: */

firstName: an optional string.
lastName: an optional string.
username: a required string.
/* 

2.
Apply the UserNameOptions type you created in the last step to the getUserName() function’s options parameter.

3.
In the terminal run tsc to compile your code.

4.
Run node index.js. You should see two formatted names appear. */

/* given code

// Write an interface here

function getUserName(options) {
  if (options.firstName && options.lastName) {
    return console.log(`${options.firstName} ${options.lastName}`);
  }

  return console.log(options.username);
}

getUserName({
  firstName: 'Mr.',
  lastName: 'Oshiro',
  username: 'hotelowner304'
})

getUserName({
  firstName: 'Madeline',
  username: 'mountainClimber'
})

*/

/* SOLUTION */

// Write an interface here
interface UserNameOptions {
    firstName?: string;
    lastName?:string;
    username:string; 
  }
  
  function getUserName(options:UserNameOptions) {
    if (options.firstName && options.lastName) {
      return console.log(`${options.firstName} ${options.lastName}`);
    }
  
    return console.log(options.username);
  }
  
  getUserName({
    firstName: 'Mr.',
    lastName: 'Oshiro',
    username: 'hotelowner304'
  })
  
  getUserName({
    firstName: 'Madeline',
    username: 'mountainClimber'
  })