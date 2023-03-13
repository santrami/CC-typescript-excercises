/* UNION TYPES
Common Key Value Pairs
When we put type members in a union, TypeScript will only allow us to use the common methods and properties that all members of the union share. Take this code: */

const batteryStatus: boolean | number = false;
 
batteryStatus.toString(); // No TypeScript error
batteryStatus.toFixed(2); // TypeScript error
/* Since batteryStatus can be a boolean or a number, TypeScript will only allow us to call methods that both number and boolean share. They both share .toString(), so we’re good there. But, since only number has a .toFixed() method, TypeScript will complain if we try to call it.

This rule also applies to type objects that we define. Take this code: */

type Goose = { 
  isPettable: boolean; 
  hasFeathers: boolean;
  canThwartAPicnic: boolean;
}
 
type Moose = {
  isPettable: boolean; 
  hasHoofs: boolean;
}
 
const pettingZooAnimal: Goose | Moose = { isPettable: true };
 
/* console.log(pettingZooAnimal.isPettable); // No TypeScript error
console.log(pettingZooAnimal.hasHoofs); // TypeScript error
Like before, since .isPettable is on both Goose and Moose types, TypeScript will allow us to call it. But since .hasHoofs is only a property on Moose, we cannot call that method on pettingZooAnimal. Any properties or methods that are not shared by all of the union’s members won’t be allowed and will produce a TypeScript error.

Instructions
1.
In the editor, we’ve written a program that should display a message about a social media event. The getFriendNameFromEvent() function takes an event, then returns the friend’s displayName or username.

Let’s start by adding a type to the getFriendNameFromEvent()’s event parameter. Use a union to allow event to be a Like or a Share, then save your code.

2.
In getFriendNameFromEvent()‘s body, it returns event.displayName || event.username. Hover over event.displayName. You’ll see a pop-up with this error message:

Property 'displayName' does not exist on type 'Like | Share'.
Property 'displayName' does not exist on type 'Share'.(2339)
This message is pointing out that there’s no displayName property on the Share type. In the Share type, add a displayName of type string, just like on the Like type.

3.
Now run tsc in the terminal to verify there are no type errors. */

/**given code 
 * type Like = {
  username: string;
  displayName: string;
};

type Share = {
  username: string;
};

function getFriendNameFromEvent(event) {
  return event.displayName || event.username;
}

const newEvent = {
  username: 'vkrauss',
  displayName: 'Veronica Krauss',
};

const friendName = getFriendNameFromEvent(newEvent);

console.log(`You have an update from ${friendName}.`);
 * 
 */

/* SOLUTION */

type Like = {
    username: string;
    displayName: string;
  };
  
  type Share = {
    username: string;
    displayName: string;
  };
  
  function getFriendNameFromEvent(event: Like | Share) {
    return event.displayName || event.username;
  }
  
  const newEvent = {
    username: 'vkrauss',
    displayName: 'Veronica Krauss',
  };
  
  const friendName = getFriendNameFromEvent(newEvent);
  
  console.log(`You have an update from ${friendName}.`);