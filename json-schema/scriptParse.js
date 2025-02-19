// JSON structure represented as a string
const jsonString = '{"name": "John Doe", "age": 30, "isStudent": true}';

// JavaScript object
const personObject = {
  name: "Jane Smith",
  age: 25,
  isStudent: false,
};

// Parsing JSON string to JavaScript object
const parsedJSON = JSON.parse(jsonString);

console.log(parsedJSON); // Output: { name: 'John Doe', age: 30, isStudent: true }
console.log(typeof parsedJSON); // Output: object

// Directly Using JavaScript Object:
console.log(personObject); // Output: { name: 'Jane Smith', age: 25, isStudent: false }
console.log(typeof personObject); // Output: object
