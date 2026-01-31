// Program 1: Print numbers from 1 to 5 (for loop)
for (let i = 1; i <= 5; i++) {
  console.log("Program 1:", i);
}

// Program 2: Print even numbers from 2 to 10 (for loop)
for (let i = 2; i <= 10; i += 2) {
  console.log("Program 2:", i);
}

// Program 3: Multiplication table of 2 (for loop)
let num = 2;
for (let i = 1; i <= 10; i++) {
  console.log("Program 3:", num + " x " + i + " = " + num * i);
}

// Program 4: Print numbers from 1 to 5 (while loop)
let i = 1;
while (i <= 5) {
  console.log("Program 4:", i);
  i++;
}

// Program 5: Countdown from 5 to 1 (while loop)
let count = 5;
while (count >= 1) {
  console.log("Program 5:", count);
  count--;
}

// Program 6: Print numbers from 1 to 3 (do-while loop)
let j = 1;
do {
  console.log("Program 6:", j);
  j++;
} while (j <= 3);

// Program 7: Sum of first 5 numbers (do-while loop)
let sum = 0;
let k = 1;
do {
  sum = sum + k;
  k++;
} while (k <= 5);
console.log("Program 7: Sum =", sum);
