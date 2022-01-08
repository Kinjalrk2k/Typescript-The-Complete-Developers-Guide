# Mastering Typed Arrays

## Typed Arrays

- Arrays where each element is some consistent type of value
- Type inference autoatically kicks in in Typed arrays too

```ts
const carMarkers: string[] = ["ford", "toyata", "chevy"];
```

- We'll want to add type annotation, when we want to initialize a variable to an empty array. This is beacude, as the array is empty, type inference cannot work on it
- For multi-dimentional arrays, we can use `string[][]`

- Why Typed Array?
  - TS can do type inference, while extracting values from an arrya
  - TS can prevent us from adding incompaitable values to the array
  - We can ger hrlp with `map`. `forEach`, `reduce` functions
  - Flexible - arrays can still contain multiple types
- Multi typed arrays can be annoated by pipe `|` character

```ts
const importantDates: (Date | string)[] = [new Date(), "3-01-2022"];
```

- When to use Typed Arrays
  - When representating collection of data
