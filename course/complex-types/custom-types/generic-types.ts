/* Generic Types
TypeScript’s generics are ways to create collections of types (and typed functions, and more) that share certain formal similarities. These collections are parameterized by one or more type variables. Now that that’s cleared up, let’s move on to the review!

Hmm, maybe we should discuss this in a bit more detail. Actually, we have already seen an example of a generic type being used. Remember the array type syntax Array<T>? This is generic because we can substitute any type (either pre-defined or custom) in the place of T. For example Array<string> is an array of strings.

Generics give us the power to define our own collections of object types. Here’s an example: */

type FamilyE<T> = {
  parents: [T, T], mate: T, children: T[]
};
/* This code defines a collection of object types, with a different type for every value of T. The generic Family<T> cannot actually be used as a type in a type annotation. Instead, we must substitute T with some type of our choosing, for example string. Then, Family<string> is exactly the same as the object type given by setting T to string: {parents:[string,string], mate:string, children: string[]}. So the following assignment will be error free: */

let aStringFamily: Family<string> = {
  parents: ['stern string', 'nice string'],
  mate: 'string next door', 
  children: ['stringy', 'stringo', 'stringina', 'stringolio']
}; 
/* In general, writing generic types with type typeName<T> allows us to use T within the type annotation as a type placeholder. Later, when the generic type is used, T is replaced with the provided type. (Writing T is just a convention. We could just as easily use S or GenericType. )

Wow! Let’s practice generic types. */

type Human = {name: string, job: string};
type Dog = {name: string, tailWagSpeed: number};

type Family<T> = {
  parents: [T, T], mate: T, children: T[]
};
//Do not change the code above this line.

//Provide type annotations for the variables below:
let theFamily: Family<number> = {
  parents: [3, 4], mate: 9, children: [5, 30, 121]
};

let someFamily: Family<boolean> = {
  parents: [true, true], mate: false, 
  children: [false, false, true, true]
};

let aFamily: Family<Human> = {
  parents: [
    {name: 'Mom', job: 'software engineer'},
    {name: 'Dad', job: 'coding engineer'}
  ],
  mate: {name: 'Matesky', job: 'engineering coder'},
  children: [{name: 'Babesky', job: 'none'}]
};

let anotherFamily: Family<Dog> = {
  parents: [
    {name: 'Momo', tailWagSpeed: 3},
    {name: 'Dado', tailWagSpeed: 100}
  ],
  mate: {name: 'Cheems', tailWagSpeed: 7},
  children: [
    {name: 'Puppin', tailWagSpeed: 0.001},
    {name: 'Puppenaut', tailWagSpeed: 0.0001},
    {name: 'Puppenator', tailWagSpeed: 0.01}
  ]
};