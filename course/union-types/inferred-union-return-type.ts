/* UNION TYPES
Inferred Union Return Types
One of the awesome things about TypeScript is that it’s able to infer types in many cases so that we don’t have to manually write them. A great example is a function’s return type. TypeScript will look at the contents of a function and infer which types the function can return. If there are multiple possible return types, TypeScript will infer the return type as a union.

For instance, take this example, where we call a function named getBookFromServer(), which might fail: */

function getBook() {
  try {
    return getBookFromServer();
  } catch (error) {
    return `Something went wrong: ${error}`;
  }
}
/* If the call is successful, the function will return a Book type describing a book. If the call fails, the function will return a string. getBook() can return a Book or string type, TypeScript infers the return type as the union Book | string. Since TypeScript can infer the function’s return type, there’s no need for us to manually define it.

Instructions
1.
In the editor, we have a User type that describes a user. In addition, there’s a function named createUser() that randomly returns a user or an error message (we’re simulating a call to a server that might fail). We’d like to call the createUser() function, then store its response in a typed variable.

Declare a variable named userData that stores the returned value of createUser(). Then, go back and provide userData with the correct union type.


2.
Run tsc in the terminal and make sure there are no type errors. */

/**give code 
 * 
 * type User = {
  id: number;
  username: string;
};

function createUser() {
  const randomChance = Math.random() >= 0.5;

  if (randomChance) {
    return { id: 1, username: 'nikko' };
  } else {
    return 'Could not create a user.';
  }
}

 * 
 */

/**SOLUTION */

type User = {
    id: number;
    username: string;
  };
  
  function createUser() {
    const randomChance = Math.random() >= 0.5;
  
    if (randomChance) {
      return { id: 1, username: 'nikko' };
    } else {
      return 'Could not create a user.';
    }
  }
  
  const userData: User | string=createUser();

  