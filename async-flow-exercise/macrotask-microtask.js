//Step 4: Macrotask vs Microtask
console.log("1");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("2");
