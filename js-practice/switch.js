// Program 1: Day name
let day = 1;
switch (day) {
  case 1:
    console.log("Program 1: Monday");
    break;
  case 2:
    console.log("Program 1: Tuesday");
    break;
  case 3:
    console.log("Program 1: Wednesday");
    break;
  default:
    console.log("Program 1: Invalid day");
}

// Program 2: Menu selection
let choice = 2;
switch (choice) {
  case 1:
    console.log("Program 2: Tea");
    break;
  case 2:
    console.log("Program 2: Coffee");
    break;
  case 3:
    console.log("Program 2: Milk");
    break;
  default:
    console.log("Program 2: Invalid choice");
}

// Program 3: Traffic signal
let signal = "red";
switch (signal) {
  case "red":
    console.log("Program 3: Stop");
    break;
  case "yellow":
    console.log("Program 3: Ready");
    break;
  case "green":
    console.log("Program 3: Go");
    break;
  default:
    console.log("Program 3: Invalid signal");
}

// Program 4: Grade
let grade = "A";
switch (grade) {
  case "A":
    console.log("Program 4: Excellent");
    break;
  case "B":
    console.log("Program 4: Good");
    break;
  case "C":
    console.log("Program 4: Average");
    break;
  default:
    console.log("Program 4: Poor");
}

// Program 5: Simple calculator
let op = "+";
let a = 10;
let b = 5;
switch (op) {
  case "+":
    console.log("Program 5: Result =", a + b);
    break;
  case "-":
    console.log("Program 5: Result =", a - b);
    break;
  case "*":
    console.log("Program 5: Result =", a * b);
    break;
  case "/":
    console.log("Program 5: Result =", a / b);
    break;
  default:
    console.log("Program 5: Invalid operator");
}

// Program 6: Month days
let month = 2;
switch (month) {
  case 1:
    console.log("Program 6: January has 31 days");
    break;
  case 2:
    console.log("Program 6: February has 28 days");
    break;
  case 3:
    console.log("Program 6: March has 31 days");
    break;
  default:
    console.log("Program 6: Other month");
}

// Program 7: Browser name
let browser = "chrome";
switch (browser) {
  case "chrome":
    console.log("Program 7: Google Chrome");
    break;
  case "firefox":
    console.log("Program 7: Mozilla Firefox");
    break;
  case "edge":
    console.log("Program 7: Microsoft Edge");
    break;
  default:
    console.log("Program 7: Unknown browser");
}
