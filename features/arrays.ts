const carMakers: string[] = ['Ford', 'Toyota', 'Chevy'];
const dates = [new Date(), new Date()]; // TypeScript can infer type as "const dates: Date[]"

const carsByMake = [
  ['F150'],
  ['Corolla'],
  ['Camaro']
]; // TypeScript can infer type as "const carsByMake: string[][]"

// Type annotations are mandatory when initialising an empty array

// Help with inference when extracting values
const car = carMakers[0]; // TypeScript can infer type of car is string because carMakers is a string[]
const myCar = carMakers.pop(); // <-- Same here

// Prevent incompatible values
// carMakers.push(100); // This will error "Argument of type '100' is not assignable to parameter of type 'string'."

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), '2030-10-10']; // TypeScript evaluates the types as: "const importantDates: (string | Date)[]"
// ... so we can set this as ...
const moreImportantDates: (Date | string)[] = [new Date(), '2030-10-10'];
// ... so these are acceptable ...
moreImportantDates.push('2025-03-15');
moreImportantDates.push(new Date());
// ... but we can't do this ...
// moreImportantDates.push(100); // Error reported as "Argument of type '100' is not assignable to parameter of type 'string | Date'."