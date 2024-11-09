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

//A function presenting the operation of a for ... of loop
console.log("Excercise 4: A function presenting the operation of a for ... of loop");
const iterable = [16, 29, 43];

for (let value of iterable) {
  value += 3;
  console.log(value);
}

//A function presenting the operation of an if statement
console.log("Excercise 5: A function presenting the operation of an if statement");

let hour = new Date().getHours();
if (hour < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);


//A function accepting two (or more) parameters, checking if they are numbers or can be converted Objects to numerical values ​​and performing calculations on them or (if this is not possible) returning an error
console.log("Excercise 6: A function accepting two (or more) parameters, checking if they are numbers or can be converted Objects to numerical values ​​and performing calculations on them or (if this is not possible) returning an error");

function calculate(a, b){
    const numbera = Number(a);
    const numberb = Number(b);
    
    if(isNaN(numbera) ){
        return "The inserted data on the number a must to be numbers"
    }
    if(isNaN(numberb)){
        return "The inserted data on the number b must to be numbers"
    }
    return numbera + numberb


}
console.log("\nResult 1:");
console.log(calculate(5,"10"));
console.log("\nResult 2:");
console.log(calculate("a","b"));
console.log("\nResult 3:");
console.log(calculate(2,9));

//A function accepting a variable number of parameters and doing something with them
console.log("Excercise 7: A function accepting a variable number of parameters and doing something with them");
function numbers(x, y){
    const numberx = Number(x);
    const numbery = Number(y);

    if(isNaN(numberx) ){
        return "The inserted data on the number x must to be numbers"
    }
    if(isNaN(numbery)){
        return "The inserted data on the number y must to be numbers"
    }
    return ((x^x)+y*x)
}
console.log("\nResult 1:");
console.log(calculate(4,8));


//A function accepting a function as one of the parameters (and using it in some way) + 2 example functions that can be used as its parameters
console.log("Excercise 8: A function accepting a function as one of the parameters (and using it in some way) + 2 example functions that can be used as its parameters");
function operation(num1, num2, op){
    return op(num1, num2);
}

function add(a,b){
    return a+b;
}
function multi(a,b){
    return a*b;
}
console.log("\nFirst operation: ");
console.log(operation(5,5,add));
console.log("\nSecond operation: ");
console.log(operation(6,2,multi));

//An example of using a constructor function to create objects - objects should have at least 3 fields of different types and 1 method doing something 
console.log("Excercise 9: An example of using a constructor function to create objects - objects should have at least 3 fields of different types and 1 method doing something");
function Player(name, size, active){
    this.name = name;
    this.size = size;
    this.active = active;
    
    
    this.getInfo = function() {
        return `Name: ${this.name}, Size: ${this.size}, Active: ${this.active ? 'Yes' : 'No'}`;
      };

}

const player1 = new Player("James", 2.06, true);
const player2 = new Player("Jordan", 1.91,false);
const player3 = new Player("Aldama", 2.16, true);
console.log(player1.getInfo());  
console.log(player2.getInfo());
console.log(player3.getInfo());


//An example of using classes to create objects - objects should have at least 3 fields of different types, a constructor and 1 method doing something
console.log("Excercise 10: An example of using classes to create objects - objects should have at least 3 fields of different types, a constructor and 1 method doing something");
function Person(name,bankacc, check, total){
    this.name = name;
    this.bankacc = bankacc;
    this.check = check;
    

    if(isNaN(bankacc) ){
        return "The inserted data on the number bankacc must to be numbers"
    }
    if(isNaN(check)){
        return "The inserted data on the number pay must to be numbers"
    }
    
    this.total = bankacc + check;
    this.getData = function() {
        return `Name: ${this.name}, Bank Account: ${this.bankacc}, Company Check: ${this.check}, Total: ${this.total}`;
    };

}
const employee1 = new Person("Johnny", 2000, 1400);
console.log(employee1.getData());

    


