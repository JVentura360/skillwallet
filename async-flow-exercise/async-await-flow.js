//Step 5: Async/Await Flow
async function test() {
  console.log("Async");
  await Promise.resolve();
  console.log("Promise");
}

console.log("A");
test();
console.log("B");
