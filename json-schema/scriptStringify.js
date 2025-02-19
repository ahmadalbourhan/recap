// Define a JSON object representing information about a person
// JSON operates as a text-based format for exchanging data
const personJSON = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
  tags: ["JavaScript", "Node.js", "Web Development"],
  isStudent: false,
  workExperience: null,
};
// Convert the JSON object to a string
const jsonString = JSON.stringify(personJSON);

// pretty-print
// const jsonString = JSON.stringify(personJSON, null, 2);

console.dir(personJSON, { depth: null, colors: true });


// console.log(jsonString);


