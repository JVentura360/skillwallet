//Step 3: Introduction to Promises
console.log("A");

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("B");