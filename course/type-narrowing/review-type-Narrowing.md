# TYPE NARROWING
# Review Type Narrowing

You’re the type of person that finishes lessons! Nice work on completing Type Narrowing. You’re now equipped to utilize TypeScript’s powers of inference through type guards and type narrowing. Let’s review what we learned:

TypeScript can understand how our code will execute at runtime so that it can infer more specific types while we write code. This is called type narrowing.
An expression that checks if a variable is a specific type is called a type guard. Type guard’s allow TypeScript to recognize when it can type narrow.
The typeof operator is useful when writing type guards. It can check if a variable is a 'string', 'number', 'boolean', or 'symbol'.
The in operator is useful for checking if a specific property exists on an object. in is especially helpful when we have data represented as objects.
TypeScript can type narrow after a type guard with an else block. TypeScript understands that the else block of an if statement must be the inverse condition of the if statement’s conditional.
TypeScript can go even further and type narrow after a type guard if the type guard has a return or another terminal statement within its block, no else required.
