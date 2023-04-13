const obj = { name: 'Alice', age: 20, gender: 'female' };
const { name, ...rest } = obj;
console.log(name, rest); // Alice { age: 20, gender: 'female' }