let arr = [10, 20, 30, 40];

// loops
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

for (let val of arr) console.log(val);

arr.forEach(val => console.log(val));

// map
let square = arr.map(val => val * val);
console.log(square);

// filter
let even = arr.filter(val => val % 2 === 0);
console.log(even);

// sort
let nums = [3, 11, 1, 25];
nums.sort((a, b) => a - b);
console.log(nums);

// reduce
let total = arr.reduce((sum, val) => sum + val, 0);
console.log(total);
