function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(); // Executes the callback function
}

function sayGoodbye() {
  console.log("How are you!");
}

greet("John Doe", sayGoodbye); // Passing sayGoodbye function as a callback

// Promise

const myPromise = new Promise((resolve, reject) => {
  // Simulated asynchronous operation (e.g., making an API request)
  setTimeout(() => {
    const success = true; // Simulating a successful operation
    if (success) {
      resolve("Data successfully fetched");
    } else {
      reject("Error: Failed to fetch data");
    }
  }, 1000);
});

myPromise.then(
  (result) => {
    // Handle the successful result (e.g., update UI with the data)
    console.log(result);
  },
  (error) => {
    // Handle the error (e.g., log the error or show an error message)
    console.error(error);
  }
);
