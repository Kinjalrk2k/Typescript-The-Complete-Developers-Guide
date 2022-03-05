# The All-Important Interface

- Creates a new type describing the property names and values types of an object
  - It's like a custom type
  - Interfaces + Classes = Strong code reuse in TypeScript
  - When we create a new interface, we essentially create a new type

## Fixing problems with long type annotations

```ts
const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
};

// long type annotations :-(
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
};

// using interfaces
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
};

printVehicle(oldCivic);
```

## Syntax around Interfaces

- We're not limited to expressing premitive values inside of an interface
- We can also add functions as properties in an interface
  - ```ts
    interface Vehicle {
      name: string;
      year: Date;
      broken: boolean;
      summary(): string; // function
    }
    ```
- When TypeScript verifies an object against an interface, it only checks whether the properties mentioned in the interface are present in the object and not the other way around
- Create functions that accepts arguments that are typed with interfaces
- Objects/classes can decide to implement a given interface to work with a function
