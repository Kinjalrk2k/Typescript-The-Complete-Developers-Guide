# 12 Advanced Generics

- We can have seperate collection classes like:

```ts
class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}
```

- Can be refractored into a generic class

```ts
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}
```

- Create an object using a generic class

```ts
new ArrayOfAnything<string>(["a", "b", "c"]);
```

## Type Inference

- If we remove the generic defination while creating an object, TypeScript can sometimes kick in with some type inference

```ts
new ArrayOfAnything(["a", "b", "c"]);
```

- This happens here becauseit looks at the type of `collection` from the constructor

## Generics with functions

- Without generics

```ts
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```

- With generics

```ts
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```

- Call the function as

```ts
printAnything<number>([1, 2, 3, 4, 5]);
```

- Type Inference can also work here

## Generic Constraints

- Set the type of the generic variable
- In other words, the generic can extend a interface to limit the types of generics allowed

```ts
class Car {
  print() {
    console.log("I'm a Car");
  }
}

class House {
  print() {
    console.log("I'm a House");
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}
```
