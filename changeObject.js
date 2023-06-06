let obj1 = { "greeting": "hello" };
let obj2 = obj1;

// Change the "greeting" property of obj1
obj1["greeting"] = "Bye";

console.log(obj1); // Output: { "greeting": "Bye" }
console.log(obj2); // Output: { "greeting": "Bye" }