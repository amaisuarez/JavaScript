//A function presenting the operation of a for loop
//For that print the vowels from array
console.log("Excercise 1: A function presenting the operation of a for loop");
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
  
}

console.log(" ");
//A function presenting the operation of a while loop
//while n lower than 3 , n++ then print when n reach 3
console.log("Excercise 2: A function presenting the operation of a while loop");
let n = 0;

while (n < 3) {
  n++;
}

console.log(n);
console.log(" ");

//A function presenting the operation of a for ... in loop
console.log("Excercise 3: A function presenting the operation of a for ... in loop");
const object = { a: 1, b: 2, c: 3 };


for (const content in object) {
  console.log(`${content}: ${object[content]}`);
}