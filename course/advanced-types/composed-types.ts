/* ADVANCED OBJECT TYPES
Composed Types
As our data gets nested deeper, we’ll start to have typed objects that become unwieldy to write and read. Take the following type: */

interface About {
  general: {
    id: number;
    name: string;
    version: {
      versionNumber: number;
    }
  }
}
/* This type has two levels of nesting. This might work for a short program, but as our code expands and we need more features we’ll likely encounter two problems:

As we add more data, this interface may become so nested it’s hard for ourselves and other developers to read.
It’s likely that we may want just a nested part of this type somewhere. For instance, we may want just the version object type in our program, and it would be nice if we could use it without all the other type members in About.
To solve this, TypeScript allows us to compose types. We can define multiple types and reference them inside other types. Here’s the type above, rewritten with individual types composed together: */

interface About {
  general: General;
}
 
interface General {
  id: number;
  name: string;
  version: Version;
}
 
interface Version {
  versionNumber: number;
}
/* The resulting code is a little longer, but we addressed the problems with a big interface: we can now read our code easier with named types and we can reuse the smaller interfaces in other places in our code.

Composing types together is an essential way to keep our code organized and flexible.

Instructions
1.
Let’s take the nested type we wrote previously and refactor it into multiple types that we compose together. We’ll do this by creating two new types: DefaultConfig and Config.

Declare an interface named DefaultConfig and define its members as the same type members that are under the existing default type inside Directory.

2.
Declare another interface named Config. Give it one type member with a property named default and a value of type DefaultConfig (the interface you declared in the last step).

3.
In the Directory type, type the config property as Config, removing its existing nested object type.

4.
It’s time to check our types to make sure everything checks out. In the terminal, run tsc to compile your code.

5.
Run node index.js in the terminal. You should see the same output that you saw in the last exercise. */

/* SOLUTION */

interface Directory {
    addFile: (name: string) => void;
    config: Config;
  }
  
  interface DefaultConfig {
    encoding: string;
    permissions: string;
  }
  
  interface Config {
    default: DefaultConfig;
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