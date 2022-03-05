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
