// Compare two JSON have the same properties
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));