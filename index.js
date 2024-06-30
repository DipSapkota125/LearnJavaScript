//Variables
//var
// var x = 90;
// console.log(x);
// var x = 100;
// console.log(x);

//let
// let y = 600;
// console.log(y);

// y = 4500;
// console.log(y);

//const
// const result = 90;
// console.log(result);

// result = 67;
// console.log(result);

//Data Types in JavaScript
//String
// const output = "Ram Thapa";
// console.log(output);
// console.log(typeof output);

//Number
// const result = 90;
// console.log(result);
// console.log(typeof result);

//float
// const x = 3.56;
// console.log(x);
// console.log(typeof x);

//undefined
// let y;
// console.log(y);
// console.log(typeof y);

//null
// const x = null;
// console.log(x);
// console.log(typeof x);

//Boolean
// const isTrue = true;
// console.log(isTrue);
// console.log(typeof isTrue);

//BigInt
// const result = 34663778965n;
// console.log(result);
// console.log(typeof result);

//Symbol
// const output = Symbol("Hello World");
// console.log(output);
// console.log(typeof output);

// let x = 8.68;
// console.log(x);
// console.log(typeof x);

//Type ConverSion
// const result = "123";
// const output = Number(result);
// console.log(output);
// console.log(typeof output);

// const result = "673";
// const output = parseInt(result);
// console.log(output);
// console.log(typeof output);

// const result = "6.56";
// const output = parseFloat(result);
// console.log(output);
// console.log(typeof output);

// const result = 678;
// const output = String(result)
// console.log(output);
// console.log(typeof output);

// const result = 678;
// const output = result.toString();
// console.log(output);
// console.log(typeof output);

// const isMarried = false;
// const ans = String(isMarried);
// console.log(ans);
// console.log(typeof ans);

//Object Types

// const obj = {
//   name: "Ram Thapa",
//   age: 34,
//   isMarried: false,
//   occupation: "Agriculture",
// };

// console.log(obj);
// console.log(typeof obj);

// const arr = [3, 4, 5, 6, 7];
// console.log(arr);
// console.log(typeof arr);

// const date = new Date();
// console.log(date);
// console.log(typeof date);

// const result = 1+"1"
// console.log(result)
// console.log(typeof result);

// const result = 4 - "2";
// console.log(result);
// console.log(typeof result);

//String Method

// const result = "Hello World";
// //length
// console.log(result.length);
// //charAt
// console.log(result.charAt(2));
// //indexof
// console.log(result.indexOf("o"));
// //lastIndexOf
// console.log(result.lastIndexOf("o"));
// //lowerCase
// console.log(result.toLowerCase());
// //upperCase
// console.log(result.toUpperCase());
// //replace
// console.log(result.replace("World", "everyone"));
// //includes
// console.log(result.includes("World"));
// //slice
// console.log(result.slice(1, 6));
// //concat
// console.log(result.concat("I Love JavaScript"));

// let output = "        Hello Students";
// console.log(output.trim());

// //split
// console.log(result.split(" "));

//concatination
// let x = "Hello World";
// let y = "I Love JavaScript!";
// let z = "Kinaki I love FrontEnd!";

// console.log(x + " " + y + " " + z);

// const a = 90;
// const b = 80;
// const result = a + b;
// console.log("The Sum of two number is:" + result);
// console.log(`The Sum of Two number is: ${result}`);

// "http://localhost:5000/api/user"+id

// `http://localhost:5000/api/user${id}`

// let y = 90;
// y = y+10;
// console.log(y)

// let x = 70;
// x += 50;
// console.log(x)

// let a = 10;
// let b = 5;
// let c = "10"

// console.log(a == c)
// console.log(a === c);
// console.log(a !=b);
// console.log(a !=c);
// console.log(a>b)
// console.log(a < b);

// let ageGroup = 18;
// console.log(ageGroup >= 18 ? "You can vote" : "You can't");

//Unary Operators
let x = "123";
let y = +x; //positive
console.log(y);
console.log(typeof y);

const obj = {
  name: "Sita Devi",
  age: 56,
};

delete obj.age;
console.log(obj);
