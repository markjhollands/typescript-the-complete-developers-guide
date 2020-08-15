// Object
const drink = {
  colour: 'brown',
  carbonated: true,
  sugar: 40
};

// Array
const pepsi = ['brown', true, 40]; // This will get interpreted as an array: "const pepsi: (string | number | boolean)[]" which means any type can appear at any index

// Tuple
const coke: [string, boolean, number] = ['brown', true, 40]; // This type annotation now defines what type should appear at what index

// Type alias
type Drink = [string, boolean, number];
const dietCoke: Drink = ['brown', true, 0];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// ... sometimes tuples are not too useful, they don't add enough meaning ...
const carSpecs: [number, number] = [400, 3354];

// ... whereas an object adds more information (the keys) ...
const carStats = {
  horsePower: 400,
  weight: 3354
};