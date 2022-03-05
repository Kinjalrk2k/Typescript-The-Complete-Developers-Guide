# Building Functionality With Classes

- Blueprint to create objects with some fields (values) and methods(functions) that represents a 'thing'
- Classes in Typescript are a little bit different from classes in ES2015

```ts
class Vehicle {
  drive(): void {
    console.log("chugga chugga");
  }

  honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
```

## Inheritence

```ts
class Vehicle {
  drive(): void {
    console.log("chugga chugga");
  }

  honk(): void {
    console.log("beep");
  }
}

// Car is a kind-of Vehicle
class Car extends Vehicle {
  //over-ridding
  drive(): void {
    console.log("vroom");
  }
}

const car = new Car();
car.drive();
car.honk();
```

## Instance Method Modifier

- Keywords that we can place inside different medthod/properties of a class
  - `public` - This method can be called any where, any time
  - `private` - This method can only be called by other methods in this class
  - `protected` - This smethod can be called by other methods in this class, or by other methods in child classes
- By default all the methods have the `public` modifier
- When overriding methods, we cannot change the modifier in the child class

> Making methods `private` or `protected` doesn't guarantee any kind of Application Security. We just restrict those methods for other developers to call directly

```ts
class Vehicle {
  public drive(): void {
    console.log("chugga chugga");
  }

  protected honk(): void {
    console.log("beep");
  }
}

// Car is a kind-of Vehicle
class Car extends Vehicle {
  //over-ridding
  drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.startDrivingProcess();
```

## Fields in classes

- Traditionally, we initialize a field inside a class
- A `constructor()` is a very special method in a class. It is instantly executed when er create a new instance of a class using the `new` keyword
- Constructor:

```ts
class Vehicle {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log("beep");
  }
}
```

- A shortcut with constructors: We need to instantiate the property up ahead. Just mark the fields in the constructor's arguments with the modifier keyword. _Remember to put in the body of the constructor `{}` even if it's empty_. (It can be any modifier depending on how we wnat to acess the field later)

```ts
class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}
```

- Modifiers apply to fields in the same way as they do to methods
- The inherited classes should pass on data to match the parent class' constructor. (When the child class doesn't have a constructor - it automatically calls the constructor of the parent class)
- When the child class has it's own constructor, then it should manually call the parent class' constructor using the `super()` method

```ts
class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

// Car is a kind-of Vehicle
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  //over-ridding
  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

const car = new Car(4, "red");
car.startDrivingProcess();
```
