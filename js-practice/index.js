// 1. Find length of string
function stringLength(str) {
  return str.length;
}
console.log("Length:", stringLength("Hello World"));


// 2. Convert to uppercase
function toUpper(str) {
  return str.toUpperCase();
}
console.log("Uppercase:", toUpper("hello"));


// 3. Convert to lowercase
function toLower(str) {
  return str.toLowerCase();
}
console.log("Lowercase:", toLower("HELLO"));


// 4. Extract part of string
function extractString(str) {
  return str.slice(0, 4);
}
console.log("Extract:", extractString("JavaScript"));


// 5. Replace word
function replaceWord(str) {
  return str.replace("Java", "JavaScript");
}
console.log("Replace:", replaceWord("I like Java"));


// 6. Find index of character
function findIndex(str) {
  return str.indexOf("o");
}
console.log("Index:", findIndex("Hello"));


// 7. Remove extra spaces
function trimString(str) {
  return str.trim();
}
console.log("Trim:", trimString("   Hello World   "));


// 8. Split string
function splitString(str) {
  return str.split(",");
}
console.log("Split:", splitString("apple,banana,orange"));


// 9. Concatenate strings
function concatString(a, b) {
  return a.concat(" ", b);
}
console.log("Concat:", concatString("Hello", "World"));


// 10. Check word exists
function checkWord(str) {
  return str.includes("easy");
}
console.log("Includes:", checkWord("JavaScript is easy"));
