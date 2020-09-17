class ArrayOfAnything<T> {
  constructor(public collection: T[]) { }

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(['a', 'b', 'c']); // RECOMMENDED
// OR
new ArrayOfAnything(['x', 'y', 'z']);

// Example of generics with functions

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c']); // RECOMMENDED
// OR
printAnything(['x', 'y', 'z']);

// Generic Constraints

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface IPrintable {
  print(): void;
}

function printHousesOrCars<T extends IPrintable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<Car>([new Car(), new Car()]);
printHousesOrCars<House>([new House(), new House()]);