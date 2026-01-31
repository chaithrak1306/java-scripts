console.log("=== ARRAY USING FOR LOOP ===");

// FOR LOOP – Direct
let arr1 = [10, 20, 30, 40];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// FOR LOOP – Function
function forLoopArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
forLoopArray([1, 2, 3, 4]);


console.log("\n=== ARRAY USING WHILE LOOP ===");

// WHILE LOOP – Direct
let arr2 = ["Apple", "Banana", "Orange"];
let j = 0;
while (j < arr2.length) {
  console.log(arr2[j]);
  j++;
}

// WHILE LOOP – Function
function whileLoopArray(arr) {
  let j = 0;
  while (j < arr.length) {
    console.log(arr[j]);
    j++;
  }
}
whileLoopArray(["Mango", "Grapes", "Papaya"]);


console.log("\n=== ARRAY USING DO-WHILE LOOP ===");

// DO-WHILE LOOP – Direct
let arr3 = ["Red", "Green", "Blue"];
let k = 0;
do {
  console.log(arr3[k]);
  k++;
} while (k < arr3.length);

// DO-WHILE LOOP – Function
function doWhileLoopArray(arr) {
  let k = 0;
  do {
    console.log(arr[k]);
    k++;
  } while (k < arr.length);
}
doWhileLoopArray(["Black", "White", "Pink"]);


console.log("\n=== END OF ARRAY LOOPS ===");
