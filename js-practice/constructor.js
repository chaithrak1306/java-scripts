console.log("\n=== CONSTRUCTOR FUNCTION SCENARIOS ===");

// Scenario 1: Student
function Student(name, age, course) {
  this.name = name;
  this.age = age;
  this.course = course;
}

let student1 = new Student("Chaithra", 21, "JavaScript");
let student2 = new Student("Anu", 22, "HTML");

console.log(student1);
console.log(student2);


// Scenario 2: Employee
function Employee(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;
}

let emp1 = new Employee(101, "Ravi", 30000);
let emp2 = new Employee(102, "Kiran", 35000);

console.log(emp1);
console.log(emp2);


// Scenario 3: Bank Account
function BankAccount(accountNo, holderName, balance) {
  this.accountNo = accountNo;
  this.holderName = holderName;
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance += amount;
    console.log("Updated Balance:", this.balance);
  };
}

let acc1 = new BankAccount(12345, "Chaithra", 5000);
acc1.deposit(2000);


// Scenario 4: Product
function Product(name, price) {
  this.name = name;
  this.price = price;
}

let product1 = new Product("Mobile", 15000);
let product2 = new Product("Shoes", 2000);

console.log(product1);
console.log(product2);


console.log("=== END OF object.js ===");
