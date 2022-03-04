# Tuples in Typescript

- Array like data structure where each element represents some property of a record
- We put the elements in an array in a very specific order, so that we can retrive them correctly later

```ts
// array
const pepsi = ["brown", true, 40];

// turning array to tuple
const pepsiTuple: [string, boolean, number] = ["brown", true, 40];

// using type alias
type Drink = [string, boolean, number];

const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 10];
```

- Tuples are not that useful. Objects are more readable and are often used. Most of the time they don't make sense. But, it can be useful while working with CSV files
