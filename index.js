console.log(" var, let, const ");
var city = "Lalitpur";       // function scoped, can be redeclared
let age = 20;                 // block scoped, can be reassigned
const college = "KEC";        // block scoped, cannot be reassigned

age = 21;                     // allowed
// college = "TU";            // ERROR: cannot reassign const

console.log(city, age, college);


console.log("Function ");
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Sampada"));


console.log("Arrow Function");
const square = (n) => n * n;
console.log(square(5));

const add = (a, b) => a + b;
console.log(add(3, 4));


console.log("Object");
const student = {
    name: "Sampada",
    age: 20,
    college: "KEC",
    introduce() {
        return "I am " + this.name + " from " + this.college;;
    }
};
console.log(student.name);
console.log(student.introduce());


console.log( "Map");
// creates a NEW array by transforming each element
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);         // [2, 4, 6, 8, 10]

const fruits = ["apple", "banana", "mango"];
const upper = fruits.map(f => f.toUpperCase());
console.log(upper);           // ['APPLE', 'BANANA', 'MANGO']


console.log("Filter");
// creates a NEW array with elements that pass the condition
const greaterThan20 = [10, 25, 5, 40, 15].filter(n => n > 20);
console.log(greaterThan20);                // [25, 40]

const evenNumbers = numbers.filter(n => n % 2 === 0); console.log(evenNumbers);      // [2, 4]


console.log("Spread Operator");

// expands array/object elements 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);         // [1, 2, 3, 4, 5, 6]

// copying an object with spread 
 const original = { name: "Sampada", age: 20 };
 const copy = { ...original, college: "KEC" };
 console.log(copy);          // { name: 'Sampada', age: 20, college: 'KEC'}