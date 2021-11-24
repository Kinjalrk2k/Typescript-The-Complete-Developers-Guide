# 01 Getting Started with TypeScript

## What is TypeScript

- We're still writing Javascipt (we're actually adding extra documentation)
- TypeScript = JavaScript + Type System
- The TS Type System
  - Helps us catch errors during development
  - Use _'type annotation'_ to analyze our code
  - Only active during development (We compile TypeScript to JavaScript)
  - Doesn't provide any performance optimization
- Running TypeScript Code
  - Write TypeScript code
  - Feed it to TypeScript code
  - Generates plain 'ol JavaScript

> Run Online: https://www.typescriptlang.org/play

## Enviornment Setup:

- Install:

```
npm install -g typescript ts-node
```

- Verify installation: `tsc --help`
- `tsc` is TypeScript Compiler

## Run TypeScrip Code

- TypeScript cannot be run directly in a browser or through NodeJS. We need to compile it the JavaScript first
- To compile:

```
tsc file.tx
```

- This will compile and create the JavaScript file `file.js` and we ca run it through NodeJS
- To combine compilation and running, e can use:

```
ts-node index.ts
```
