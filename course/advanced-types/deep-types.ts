/* ADVANCED OBJECT TYPES
Deep Types
As our programs grow and become more complex, we’ll need to add more methods and properties to our objects to accommodate more features. In fact, we may need to add nested methods and properties. Take a look at the following class: */

class OneSeries implements Robot {
  about;
 
  constructor(props: { general: { id: number; name: string; } }) {
    this.about = props;
  }
 
  getRobotId() {
    return `ID: ${this.about.general.id}`;
  }
}
/* In this class, OneSeries expects to have an about property that is an object with a nested object inside it. Inside getRobotId(), OneSeries returns this.about.general.id. To type an object nested inside another object, we could write an interface like this:
 */
interface Robot {
  about: {
    general: {
      id: number;
      name: string;
    };
  };
  getRobotId: () => string;
}
/* Notice that within the Robot interface, the general typed object is nested inside the about typed object. TypeScript allows us to infinitely nest objects so that we can describe data correctly.

Instructions
1.
In the code editor, we’re going to continue working on our operating system. This time, we added a config property to the DesktopDirectory class. The data in config will be needed for every Directory, so let’s add it to the Directory interface.

Inside the Directory interface, add a config type member that matches the config property of DesktopDirectory. You should write a type that has a nested default object.

2.
In the terminal run tsc to compile your code.

3.
Run node index.js in the terminal to see the output. You should see output about the configuration of DesktopDirectory. */

/* given code 

interface Directory {
  addFile: (name: string) => void;
  // Define a config type member here
  
}

class DesktopDirectory implements Directory {
  config = {
    default: {
      encoding: 'utf-8',
      permissions: 'drw-rw-rw-',
    }
  }

  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();

console.log(Desktop.config);

*/

/*SOLUTION */

interface Directory {
  addFile: (name: string) => void;
  // Define a config type member here
  config: {
    default: {
      encoding: string,
      permissions: string;
    }
  } ;
}

class DesktopDirectory implements Directory {
  config = {
    default: {
      encoding: 'utf-8',
      permissions: 'drw-rw-rw-',
    }
  }

  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();

console.log(Desktop.config);