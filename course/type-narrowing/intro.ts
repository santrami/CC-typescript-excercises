/* TYPE NARROWING
Introduction
When compiling TypeScript code to JavaScript, the compiler will throw any errors related to variable types. This process of compilation involves giving the TypeScript compiler the information it needs to perform type checks. Therefore, when we give our variables specific types, these types are reinforced by the compiler/TypeScript.

If TypeScript could only check types at compile-time, that would still be useful, but it turns out that TypeScript can do so much more. TypeScript has the ability to evaluate how our runtime code will perform, and then infer variable types for us. When the compiler notices an error, it will complain when running tsc and also by showing a red squiggly line below the code in the editor.

Evaluating runtime code can be really useful when our programs have variables of multiple types. In the case of unions, TypeScript can hone in on a more narrow type by evaluating our runtime code. For example: */

function formatDate(date: string | number) {
  // date can be a number or string here
 
  if (typeof date === 'string') {
    // date must be a string here
  }
}
/* In the example above, the date parameter has a union type of string | number. Inside the body of formatDate(), there’s a conditional that checks if date is a 'string'. If the condition is met, then TypeScript can infer that date must be a string type within the conditional. It will allow us to call methods and properties that are allowed on string types. This is called type narrowing. Type narrowing is when TypeScript can infer more specific types based on the variable’s surrounding code. */