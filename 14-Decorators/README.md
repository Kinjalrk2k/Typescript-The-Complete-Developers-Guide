# Decorators

- Function that can be used to modify/change/anything different properties/methods of a class
- Not the same as Javascript decoratos
- Used inside/on classes only
- Understanding the oder in which the decorators are run is the key to understand them
- Experimental!

## Use Decorators

- To support decorators, we need to enable these in the _`tsconfig.json`_ file:

```diff
+ "experimentalDecorators": true /* Enable experimental support for TC39 stage 2 draft decorators. */,
+ "emitDecoratorMetadata": true /* Emit design-type metadata for decorated declarations in source files. */,
```

- To test out decorators

```ts
class Boat {
  color: string = "red";

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    console.log("swish");
  }
}

function testDecorator(target: any, key: string): void {
  console.log("target", target);
  console.log("key", key);
}

/**
 * Output:
 * target { pilot: [Function (anonymous)] }
 * key pilot
 **/
```

## Details on decorators

- First argument is the prototype of the objeect
- Second argument is the key of the property/method/accessor on the object
- Third argument is the property descriptor
- Decorators are applied when code for this class is ran (not when an object is instantiated)
- Decorators are like syntaxtic sugar
- All that happens behind the scenes when we add a decorator is: The decorators are ran with the 3 arguments when the class is created. So essentially the code whats running is:

```ts
testDecorator(Boat.prototype, "pilot");
```

## Property Descriptor

- The `PropertyDecorator` is globally available for TypeScript. No need to import anything
- This is an object which has some configurations defined around a property of an object
- It's a part of ES5 Javascript
- Property descriptors for methods can have the following options:
  - `writable`: Whether or not the property can be chnaged
  - `enumerable`: Whether or not the property gets lopped over by `for...in`
  - `value`: The current value
  - `configurable`: Property definition can be changed or property can be deleted

```ts
const car = { make: "honda", year: 2000 };
Object.getOwnPropertyDescriptor(car, "make");
// {value: 'honda', writable: true, enumerable: true, configurable: true}

Object.defineProperty(car, "make", { writable: false });
car.make = "chevy";
car;
// {make: 'honda', year: 2000}
// as the property is not writable
```

## Wrapping methods in decorators

```ts
function  (target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    } catch (e) {
      console.log("Opps! Boat was sunk!");
    }
  };
}
```

## Decorator Factory

- A function that returns a decorator

```ts
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}
```

## Decorators over Properties

- The first argument in a degorator (`target`) is always a prototype. It stores method properties only
- Decorators run when we run the class. So, it cannot read a class's property
- Decorators over properties doesn't have much utility

```ts
function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
  console.log(target[key]); /* undefined */
}
```

## More Decorators

- We can use decorators over accessors
- We can use decorators over arguments of a function

```ts
class Boat {
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === "fast") {
      console.log("swish");
    } else {
      console.log("nothing");
    }
  }
}

function parameterDecorator(target: any, key: string, index: number) {
  // index is the index of the parameter
  console.log(key, index);
  /**
   *  pilot 1
   *  pilot 0
   * */
}
```

- We can use decorator over a class

```ts
@classDecorator
class Boat {}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}
```
