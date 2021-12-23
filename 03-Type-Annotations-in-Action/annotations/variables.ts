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

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// declare and inilialize later
let words = ["red", "green", "blue"];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

let numbers = [10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
