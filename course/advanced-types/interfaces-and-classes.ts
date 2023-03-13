/* ADVANCED OBJECT TYPES
Interfaces and Classes
The interface keyword in TypeScript is especially good for adding types to a class. Since interface is constrained to typed objects and using class is a way to program with objects, interface and class are a great match.

TypeScript gives us the ability to apply a type to an object/class with the implements keyword, like this: */

interface Robot {
  identify: (id: number) => void;
}
 
class OneSeries implements Robot {
  identify(id: number) {
    console.log(`beep! I'm ${id.toFixed(2)}.`);
  }
 
  answerQuestion() {
    console.log('42!');
  }
}
/* In the example, there’s an interface named Robot and a class named OneSeries. The implements keyword is then used to apply the type Robot to OneSeries.

Notice that Robot has an .identify() method. Since Robot is applied to OneSeries, OneSeries must include a method named .identify() that matches the Robot interface. Additionally, OneSeries can have methods and properties of its own, like the .answerQuestion() method.

implements and interface allow us to create types that match a variety of class patterns, which makes interface a good tool for use on object-oriented programs.

Instructions
1.
In the code editor, there’s a program that we’d like to type. The program is the beginning of a computer’s operating system and will allow its users to create directories (aka folders).

Every directory on the operating system should be able to add a file. Declare an interface named Directory at the top of index.ts. Give it a method name, addFile, whose type is a function with one parameter, name, of type string and returns void.

2.
Using the implements keyword, apply Directory to the DesktopDirectory class.

3.
In the terminal run tsc to compile your code.

4.
Run node index.js in the terminal to see the output. You should see the output from our operating system program about adding and previewing files. */

/**given code 
 * 
 * // Write an interface here


class DesktopDirectory {
  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();

Desktop.addFile('lesson-notes.txt');
Desktop.showPreview('lesson-notes.txt');
 * 
*/

/* SOLUTION */

// Write an interface here
interface Directory {
    addFile: (name:string) => void;
  }
  
  class DesktopDirectory implements Directory {
    addFile(name: string) {
      console.log(`Adding file: ${name}`);
    }
  
    showPreview(name: string) {
      console.log(`Opening preview of file: ${name}`);
    }
  }
  
  const Desktop = new DesktopDirectory();
  
  Desktop.addFile('lesson-notes.txt');
  Desktop.showPreview('lesson-notes.txt');