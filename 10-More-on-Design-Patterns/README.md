# 10 More on Design Patterns

## Configuring TS Compiler

- `tsc` is great for single file apps, but if we eventually start working on a big project, compiling with `tsc` would make our directyl messy: with a bunch od ts and js files
- Instead use `src` and `build` directories for ts and js files respectively
- We'll need to gnerate a `tsconfig.json` file. To create that, run: `tsc --init`
- In the `tsconfig.json` file uncomment the lines for `rootDir` and `outDir`
  - `rootDir` is the directory where our source code can be found. Specify it as `./src`
  - `outDir` is the directory where our build output should be. Specify it as `./build`
- Running `tsc` after configuring it automatically builds all the source code files, by lookin into the deatils from the `tsconfig.json` file.
- Running `tsc -w` makes it go into a _watch_ mode. It checks for changes in the files present in the `rootDir` and compiles whenever there's a change detected

## Concurrent compilation and execution

- Use `nodemon` and `concurrently`
- Use the following scripts

```json
{
  "scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  }
}
```

## Notes

- Strings are immutable
- `"X".charCodeAt(0)` returns the ASCII value
- Type gaurds can be created using `instanceof` method. But type gaurds is not a good coding standard
- To create a getter mehod, use `get` keyword before a function

```ts
get length(): number {
  return this.data.length;
}
```

- The arguments names in the interfaces and the actual implementation is no needed to be same

## Abstract Class

- Can't be used to create an object directly
- Can only be used as a parent class
- Can contain some real implementations
- The implementated methods can refer to other methids that don't actually exist yet (we still have to provide names and types for the unimplemented methods)
- Can make child classes promise to implement some other method
- Abstract methods and properties can be in within a abstract class

```ts
export abstract class Sorter {
  abstract length: number;

  abstract compare(leftIndex: number, rightIndex: number): boolean;

  abstract swap(leftIndex: number, rightIndex: number): void;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
```

## Interfaces Vs Abstract classes

- Interfaces
  - Sets up contract between different classes
  - Use when we have very different objects that we want to work together
  - Promotes loose coupling
- Abstract classes
  - Sets up a contract between different classes
  - Use when we are trying to build up a defiantion of an object
  - Strongly couples classes together
