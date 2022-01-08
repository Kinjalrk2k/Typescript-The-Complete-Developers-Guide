# 04-Annotations-With-Functions-and-Objects

## Type annotations of a function

```ts
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
```

- This is annotating the variable `logNumber` not exactly the function
- Type Inference also works for functions, but only works on the return value of the function, not the params

```ts
const add = (a: number, b: number): number => {
  return a + b;
};
```

- This is type annotation on the function
- TypeScript analyses the body of the function according to the return annotation
- Typescript doesn't check our code's logic. it just looks into the types
- We should always write the type annotation for the function's arguments as we dont get any type inference there
- But for the return of the function, we get the type inference. Though, we should always mention the type

## Anonymous function:

```ts
const multiply = function (a: number, b: number): number {
  return a * b;
};
```

## `void`

- When a function doesn't return anything, it returns `void`

- Technically a function that has a return type annotation of `void`, can return `null` and `undefined`

```ts
const logger = (message: string): void => {
  console.log(message);
};
```

## `never`

- Means we'll never reach the end of this function

```ts
const throwError = (message: string): never => {
  throw new Error(message);
};
```

- Here we throw an error and exit the function early without returning from the function

## Destructing arguments

- Destructring and the Anotation will be two different statements

```ts
const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

// prettier-ignore
const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
```

## Objects

```ts
const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
```
