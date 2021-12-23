# 03 Type Annotations in Action

- Type Annotation: Code we add to tell TypeScript what type of value a variable will refer to. we tell TypeScript here!
- Type Inference: TypeScript figures out what type of value a variable refers to. TypeScript guesses the type

## Type Annotation

- Adding types ot your variables, classes, objects and function

```ts
// Variables
let apples: number = 5;
let speed: string = "fast";
let is: boolean = true;
let nothingMuch: null = null;

let now: Date = new Date();

// Array
let colors: string[] = ["red", "blue", "green"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object Literal
// type annotation is attached on the fly
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
// for the type annotation of functions, we're interested on the type of params and the return type
// (i: number) => void means i is the param of type number and the function returns void
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
```

## Type Inference

- Type Inference is when TypeScirpt guesses the type, instead of our annotation
- If declaration and initialization are on the same line, TypeScript will figure out the type of the variable for us
- When to add annotations?
  - Type annotations are used when we declare a variable on one like then initialize it later
    - ```ts
      const json = '{"x": 10, "y": 20}';
      const coordinates: { x: number; y: number } = JSON.parse(json);
      console.log(coordinates);
      ```
  - When we want a variable to have a type that cannot be infered
    - ```ts
      let numbers = [10, -1, 12];
      let numberAboveZero: boolean | number = false;
      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
          numberAboveZero = numbers[i];
        }
      }
      ```
  - When a function returns the `any` type, we need to clarify it
    - ```ts
      const json = '{"x": 10, "y": 20}';
      const coordinates: { x: number; y: number } = JSON.parse(json);
      console.log(coordinates);
      ```
- When to use inference: Well always!
- `any` type: TypeScript has no idea of the type
  - Typescript can do no error handling when using `any` varibale
  - We should avoid using `any`
- For multiple possible types for a single variable, use the `|` character
