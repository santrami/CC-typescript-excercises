/* UNION TYPES
Unions with Literal Types
We can use literal types with TypeScript unions. Literal type unions are useful when we want to create distinct states within a program.

For instance, if we were writing the code that controlled stoplights, we might write a program like this: */

type Color = 'green' | 'yellow' | 'red';
 
function changeLight(color: Color) {
  // ...
}
/* With the code above, we could ensure that wherever changeLight() is called, that it gets passed only allowed stoplight colors. If we tried to call changeLight('purple'), TypeScript would complain, since that is not a valid stoplight color.

This technique allows us to write functions that are specific about the states they can handle, which helps us write code that’s less prone to errors.

Instructions
1.
Let’s write a program that will use literal types and unions to display the states of a download button.

Start by writing a type named Status. It should be equal to the union of three literal types: 'idle', 'downloading', and 'complete'.

2.
Next, write a function named downloadStatus(). It should have one parameter named status, which should be typed as the Status type you wrote in the previous step.

3.
Inside the downloadStatus() function’s body, write three conditionals that output different messages based on status.

If status is 'idle', console.log() a 'Download' message.

If status is 'downloading', console.log() a 'Downloading...' message.

If status is 'complete', console.log() a 'Your download is complete!' message.

4.
Now that we have a downloadStatus() function with distinct states, let’s call it!

Call downloadStatus() with a valid argument.

5.
In the command line, run tsc to compile your code.

6.
Run node index.js to execute your compiled code. You should see one of the three console.log() statements you wrote print to the console. */

/*SOLUTION */

type Status= 'idle' | 'downloading' | 'complete';

function downloadStatus(status: Status){
  if(status === 'idle'){
    console.log('Download')
  } else if(status ==="downloading"){
    console.log('Downloading')
  }else if (status === 'complete'){
    console.log ('Your download is complete')
  }
}

downloadStatus('idle');