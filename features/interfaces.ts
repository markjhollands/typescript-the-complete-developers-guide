// Without inferface

const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true
};

const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

printVehicle(oldCivic);

// With inferface

interface Reportable {
  summary(): string;
};

const newYaris = {
  name: 'Yaris',
  year: new Date(),
  broken: false,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink = {
  colour: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(newYaris);
printSummary(drink);