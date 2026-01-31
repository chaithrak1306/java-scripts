console.log("=== Object Literal ===");
let student = {
  name: "Chaithra",
  age: 21,
  course: "JavaScript"
};
console.log(student);


console.log("\n=== new Object() ===");
let employee = new Object();
employee.id = 101;
employee.name = "Ravi";
employee.salary = 30000;
console.log(employee);


console.log("\n=== Constructor Function ===");
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let p1 = new Person("Anu", 22);
let p2 = new Person("Rahul", 25);
console.log(p1);
console.log(p2);


console.log("\n=== ES6 Class ===");
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
}
let car1 = new Car("Toyota", "White");
console.log(car1);


console.log("\n=== Object.create() ===");
let prototypeObj = {
  greet: function () {
    console.log("Hello!");
  }
};
let user = Object.create(prototypeObj);
user.name = "Kiran";
console.log(user);
user.greet();


console.log("\n=== Factory Function ===");
function createBook(title, author) {
  return {
    title: title,
    author: author
  };
}
let book1 = createBook("JS Basics", "John");
console.log(book1);


console.log("\n=== Spread Operator ===");
let base = { x: 10, y: 20 };
let newObj = { ...base, z: 30 };
console.log(newObj);
