# UNION TYPES
Review Unions
🙌 Way to go! We’ve learned a variety of ways to create types that are as specific as we need with unions. To recap, we’ve learned:

We can combine multiple types with a vertical bar character |. This is the syntax for defining a union. Each type in a union is called a type member.
We can narrow down what methods and properties are available in a program with type narrowing. Type narrowing allows us to type a variable as a union, then narrow down the union with a type guard to call type member specific methods and properties.
If a function can return multiple types, TypeScript will infer all possible return types as a union.
We can use unions to allow arrays to have multiple types of values.
To call a method or property on a variable typed as a union, we can only call methods or properties that are identical on all members of the union.
We can define states within our program by using literal types and unions.