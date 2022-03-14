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
