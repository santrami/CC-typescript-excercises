/* ADVANCED OBJECT TYPES
Introduction
One of the challenges of writing TypeScript is knowing how to apply types in every situation we’ll encounter within our code. Take a look at this example: */

class Robot {
  identify(id: number) {
    console.log(`beep! I'm ${id}`);
  }
}
/* Here, we’ve created a class named Robot. How could we apply the type Robot? Also, some robots may have more functionality than others, or have variable property names. How might we apply types in these situations?

This lesson is about how we can deal with a variety of situations to make sure that our code is typed, no matter what our program does or how it’s structured. Types should always help make our code safer, without imposing restrictions on how we write and organize our code.

In this lesson, we’ll dive deep into how to use types with object-oriented programming patterns, how to use types together to create combined types, and so much more! */

