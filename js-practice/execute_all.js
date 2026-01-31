console.log("===== PROGRAM 7 : DO-WHILE LOOP =====");

let sum = 0;
let k = 1;

do {
  sum = sum + k;
  k++;
} while (k <= 5);

console.log("Sum of numbers 1 to 5 =", sum); // 15


console.log("\n===== MATH OPERATIONS =====");

let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Power:", Math.pow(a, b));
console.log("Square Root of 16:", Math.sqrt(16));
console.log("Maximum:", Math.max(a, b));
console.log("Random number:", Math.random());


console.log("\n===== OBJECT EXECUTION =====");

let student = {
  name: "Chaithra",
  age: 21,
  course: "JavaScript",
  marks: 85,
  display: function () {
    return `Name: ${this.name}, Course: ${this.course}, Marks: ${this.marks}`;
  }
};

console.log(student.display());


console.log("\n===== FUNCTION STRUCTURE =====");

function calculateTotal(x, y) {
  let total = x + y;
  return total;
}

let result = calculateTotal(25, 30);
console.log("Total =", result);
