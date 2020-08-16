class Vehicle {
  constructor(public colour: string) { }

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(colour: string, public wheels: number) {
    super(colour);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car('orange', 4);
car.startDrivingProcess();
console.log(car.colour);