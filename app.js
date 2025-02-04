"use strict";
// =======================================================
// 27th Jan 2025
// =======================================================

// VARIABlES, VALUES, ASSIGNMENT OPERATOR (=) AND DECLARATION
// Variables are storage facilities for storing data or values
// values are just pice of data
// Declaration are used in declaring variables (let, cont and var)
// The assignment operaror (=) is used to assign a variable to a value.. remember that this symbol (=) in javascript is not an equal to sign, but an assignment operator

// let keyword
let firstName = "Endy";
console.log(firstName);

// var keyword
var country = "Liberia";
console.log(country);

// const keyword
const PIE = 3.142;
console.log(PIE);

// let vs const vs var
// VAR---- Declares, re-declares and re-assigns
var gender = "male";
var gender = "female";
gender = "non-binary";
console.log(gender);

// LET----Declares and re-assigns
let state = "Delta";
// console.log(state);

// let state = "lagos";
state = "kaduna";
console.log(state);

// CONST----declares
const FULLNAME = "Leo";
// const FULLNAME = "Emma";
console.log(FULLNAME);

// constraints in varables naming
// Varables names can only contain letters, numbers, underscore, dollar sign but it can't start with a number
// Do not gives space btw variables names, use carmel casing
// reseved names can not be used as variable names, afterall they are reserved
// By convention, do not start a variable name with uppercase except for const
// Use descriptive names when calling out variables

// ===========================================================================
// DATA TYPES
// ===========================================================================
// Strings -- USed for storing letters. They are denoted by a single quote('') or double quote("")
// Number -- Used for numbers, it can hold decimal and whole numbers
// Boolean---tue or false
// Null---empty and is set by a programmer
// Undefined-- set by the system
// Objects(Arrays, dated,Fuctions) -- For holding more than one value and denoted by{}
// BigInt
// Symbol

// strings
let firstName1 = "Eggys";
console.log(firstName1);
let lastName = "Austin";
console.log(lastName);

// string concatenation(joining)
let fullName = firstName1 + " " + lastName;
console.log(fullName);
// string properties and methods
// lenght

let email = "askjeeves@hotmail.com";
console.log(email);
console.log(email.length);

// Getting position
let city = "Godham";
console.log(city);
console.log(city[4]);

// methods
// toUpperCase()
let trainee = "wonder";
console.log(trainee);
console.log(trainee.toUpperCase());

// toLowerCase()
let newTrainee = "ISREAL";
console.log(newTrainee);
console.log(newTrainee.toLowerCase());

// indexOf()
let newEmail = "techstudio@gmail.com";
console.log(newEmail);
console.log(newEmail.indexOf("m"));

// lastIndexOf()
let applicant = "racheal";
console.log(applicant);
console.log(applicant.lastIndexOf("a"));
console.log(applicant.indexOf("a"));
console.log(applicant.length);

// slice()
let religion = "Christianity";
console.log(religion);
console.log(religion.slice(4, 9));
console.log(religion.slice(0, 6));

//  repeat string
// let word = "ha";
// console.log(word.repeat(3)); // "hahaha"

// let messyString = "   Hello, tidy world!   ";
// let trimmedString = messyString.trim();
// console.log(trimmedString); // Outputs: "Hello, tidy world!"

// let text = "JavaScript";
// let subText = text.substring(0, 4);
// console.log(subText); // Outputs: "Java"

// numbers
let year = 2025;
console.log(year);

let score = 100;
console.log(score);

let score2 = 200;
console.log(score2);

// math operator
// +,-,/,*,**,%

let finalScore = score + score2;
console.log(finalScore);

let minus = score2 - score;
console.log(minus);

let multiply = score * score2;
console.log(multiply);

let divide = score2 / score;
console.log(divide);

let number1 = 10;
let number2 = 3;

let indices = number1 ** number2;
console.log(indices);

let modulus = number1 % number2;
console.log(modulus);

// Decremental and Incremental values
let newYear = year + 1;
console.log(year + 1);
console.log(newYear);

year++;
year--;
year += 10;
console.log(year);

// Start the task
// Task 1
// Declare variables for continent, language, ghanaPopulation, finlandPopulation, country and nigeriaPopulation

// With these respective values

// Africa, pidgin English, 500,800 Nigeria, 1000

// Task

// 1)  If nigeriaPopulation is split in half.... How many people would live in each half?

// 2)  Increase nigeriaPopulation by 1 and log result to the console

// 3)   Log to the console using < or > to indicate whether nigeriaPopulation is more than finlandPopulation

// 4)   Do same for ghanaPopulation against finlandPopulation

// 5)   Based on the variables created, create a new variable 'description' which would contain a string with this format --nigeria is in Africa and it's nigeriaPopulation people speak pidgin English

// Mode of submission

// cc and paste your codes here on WhatsApp

// functions
// Regular Function
// functions encapsulate reusable code
// function greet(name) {
//   return `Hello, ${name}`;
// }

// Arrow Function
// const come = (name) => `Hello, ${name}`;

// DOM Manipulation
// javascript interacts with HTMLand CSS to dynamically update web pagas
// document.querySelector("#button").addEventListener("click", () => {
//   console.log("Button clicked!");
// });

// document.getElementById("");

// document.title = "my website";
// document.body.style.backgroundColor = "Black";

// console.dir(document);

// const username

let continent;
let continents = "africa";
console.log(continents);

let language = "pigin Eglish";
console.log(language);

let ghanaPopulation = "500";
console.log(ghanaPopulation);

let finlandPopulation = "800";
console.log(finlandPopulation);

let country1 = "nigeria";
console.log(country1);

let nigeriaPopulation = "1000";
console.log(nigeriaPopulation);

// task1

// let nigeriaPopulation = "1000";
let halfPopulationOfNigeria = nigeriaPopulation / 2;
console.log(halfPopulationOfNigeria);

// task 2
let increaseNigeriaPopulation = nigeriaPopulation + 1;
console.log(nigeriaPopulation + 1);
console.log(increaseNigeriaPopulation);

// task 3
// let greaterThan = nigeriaPopulation > finlandPopulation;
// console.log(greaterThan);
// task3
console.log(nigeriaPopulation > finlandPopulation);

// task 4
// let lessThan = ghanaPopulation > finlandPopulation;
// console.log(lessThan);
console.log(ghanaPopulation < finlandPopulation);

// task 5
let description =
  country1 +
  " " +
  "is in" +
  " " +
  continent +
  " " +
  "and its" +
  " " +
  nigeriaPopulation +
  " " +
  "people speak" +
  " " +
  language;
console.log(description);

let counts = 50;

let statement = " The blog has" + " " + counts + " " + "likes";
console.log(statement);

let traineeScore = 90;
let traineeName = "Endy";
let traineeSchool = "Aguda grammar school";

// Muzeenat did you know Endy attended Aguda grammar school and score 90 in her text?

let response =
  "muzeenat did you know" +
  " " +
  traineeName +
  " " +
  "attends" +
  " " +
  traineeSchool +
  " " +
  "and scored" +
  " " +
  traineeScore +
  " " +
  "in her test";
console.log(response);

// template literal
let newResponse = `Muzeenat did you know ${traineeName} attends ${traineeSchool} and scored ${traineeScore} in her test`;
console.log(newResponse);

// ARRAYS-----They are used for storing collections of strings, numbers, booleans and other data types. They are denoted by aquar bracket([])

let favFood1 = "Banga-soup";
let favFood2 = "Starch";
let favFood3 = "Efo-riro";
let favFood4 = "Pounded-yam";

let danFavFoods = ["apku", "beans", "akamu", "custard"];
console.log(danFavFoods);

// Array props
console.log(danFavFoods);

// position
console.log(danFavFoods[2]);

console.log((danFavFoods[0] = "semo"));
danFavFoods[0] = "semo";
console.log(danFavFoods);
console.log(danFavFoods[3]);

// Array methods
// includes
let includes = danFavFoods.includes("corn");
console.log(includes);
// join()
let join = danFavFoods.join(" ");
console.log(join);
// concat
let newDanFavFood = ["Ewedu", "Ewa"];
console.log(newDanFavFood);

let concat = danFavFoods.concat(newDanFavFood);
console.log(concat);

// push()
let push = danFavFoods.push("iribotor");
console.log(push);
console.log(danFavFoods);
// pop()
let pop = danFavFoods.pop();
console.log(danFavFoods);

let cart = [];
console.log(cart);
console.log(cart.length);

cart.push("sweatshirt");
console.log(cart);
cart.push("sneakers");
console.log(cart);

console.log(cart.length);

// Easy Take home 1
// Create an array of trainees of everyone in this class,starting with Leo

// Update the first name on the array to pappi and log to the console

// Using an array method..
// Add Amos and Mike to the end of array

// Using an array method remove Mike from the array

// Using an array method..
// Add Zack and Bobby at the beginning of d array

// Using an array method remove Zack from the array

// Using an array method concat a new array of trainees... Queen, segun, Pius, emeka
// Names of trainees
// Leo
// Muzeenat
// Emmanuel
// Israel
// Daniel
// Endy
// Jay // Yemi // Mike // Sam // Wonder

// ans1
let trainee1 = "Leo";
let trainee2 = "Muzeenat";
let trainee3 = "Emmanuel";
let trainee4 = "Isreal";
let trainee5 = "Daniel";
let taineee6 = "Endy";
let trainee7 = "Jay";
let trainee8 = "Yemi";
let trainee9 = "Mike";
let trainee10 = "Sam";
let trainee11 = "Wonder";

//(1) update the firstName to papi
let trainees = [
  "Leo",
  "Muzeenat",
  "Emmanuel",
  "Israel",
  "Daniel",
  "Endy",
  "Jay",
  "Yemi",
  "Mike",
  "Sam",
  "Wonder",
];
trainees[0] = "papi";
console.log(trainees);

//(2) Add Amos and Mike to the end of array
let newTrainees = ["amos", "Mike"];
console.log(newTrainees);
let traineeAddedToClass = trainees.concat(newTrainees);
console.log(traineeAddedToClass);

//(3) Using an array method remove Mike from the array
let remove = traineeAddedToClass.pop();
console.log(traineeAddedToClass);

// (4)Using an array method..
// Add Zack and Bobby at the beginning of d array
traineeAddedToClass.unshift("Zack", "Boby");
console.log(traineeAddedToClass);

// (5)Using an array method remove Zack from the array
traineeAddedToClass.shift("Zack");
console.log(traineeAddedToClass);

// (6) Using an array method concat a new array of trainees... Queen, segun, Pius, emeka
let newArrayOfTrainees = trainees.concat("queen", "segun", "pius", "Emeka");
console.log(newArrayOfTrainees);

// ==========================================================
// 29th Jan 2025
// ==========================================================
// spread operator(...) and destructuring

let numbers = [1, 2, 3, 4, 5, 6];
let newNumbers = [7, 8, 9, 10];

let allNumbers = newNumbers.concat(numbers);
console.log(allNumbers);
// with spread operator
let newConcat = [...numbers, ...newNumbers];
console.log(newConcat);

// destructuring

let names = ["Daniel", "Emmanuel", "Muzeenat", "Endy", "Leo", "Wonder"];

console.log(names);
console.log(names[0]);
console.log(names[2]);
console.log(names[4]);
// destructuring
let [why, me, , always, ...rest] = names;
console.log(why);
console.log(me);
console.log(always);
console.log(...rest);

// typeof
let scores = 30;
console.log(scores);
console.log(typeof scores);

let pikinName = "Seun";
console.log(pikinName);
console.log(typeof pikinName);

let laptops = ["dell", "hp"];
console.log(laptops);
console.log(typeof laptops);

let cart1 = null;
console.log(cart1);
console.log(typeof cart1);

let destination;
console.log(typeof destination);

// type conversion and coercion
// conversion
let inputYear = 1985;
console.log(inputYear);
console.log(typeof inputYear);

let newNumber = Number("1986");

// console.log(typeof newNumber);

let addedNumber = newNumber + 2;
console.log(addedNumber);

// converting sth dt is not actually a number

let personName = Number("Eggys");
console.log(personName);
console.log(typeof personName);
let addedInfo = personName + 2;
console.log(addedInfo);
console.log(typeof addedInfo);
console.log(typeof NaN);

// coercion

console.log("I am 60 years old");
console.log("I am " + String(60) + " years old");

console.log("22" + 2);
console.log("22" - 2);
console.log("22" > 2);

let z = "1" + 1;
let w = z - 1;
console.log(w);

// comparison operators
// >, <, !=, ==(loose comparison), ==(strict comparison),
// !==, >=, <=
const YEAR = 2025;
console.log(YEAR > 2025);
console.log(YEAR < 2025);
console.log(YEAR >= 2025);
console.log(YEAR <= 2025);
console.log(YEAR != 2025);

console.log(!true);
console.log(!false);

// Loose comparison operator(==), only checks for the value and not the data type

let SCORE = "100";
let SCORE2 = SCORE == 100;
let SCORE3 = SCORE != 100;
// console.log(SCORE);

console.log(SCORE2);
console.log(SCORE3);

// strict comparison operator (===), checks for both values and data type

let SCORE4 = SCORE === 100;
let SCORE5 = SCORE !== 100;
console.log(SCORE4);
console.log(SCORE5);
0;
// control flow(for, while, for-in, for-of) and conditional statements(if, else, else-if, switch statements and ternary operator)

// for loop ---- uses the for-keyword, initializer, condition, a final expression and block of code or code block

for (let i = 0; i < 4; i++) {
  console.log(i);
}
// 0
// 1
// 2
// 3

let guys = [
  "Wonder",
  "Daniel",
  "Sam",
  "Leo",
  "Emma",
  "Isreal",
  "Micheal",
  "Jay",
];

console.log(guys[0]);
console.log(guys[1]);

for (let i = 0; i < guys.length; i++) {
  console.log(guys[i]);
}
// while loop
let i = 0;
while (i < guys.length) {
  console.log(guys[i].toUpperCase());
  i++;
}

// for-in loop
let ladies = ["Muzeenat", "Endy"];
console.log(ladies[0]);

for (let l in ladies) {
  console.log(ladies[l]);
}

// for-of loop

for (let i of ladies) {
  console.log(i);
}

// let colors = ['blue', 'pink', 'black', 'red']
// use a for loop on the array
// For of and for in loops

let colors = ["blue", "pink", "black", "red"];

console.log(colors[0]);
console.log(colors[1]);

for (let a = 0; a < colors.length; a++) {
  console.log(colors[a]);
}

for (let a of colors) {
  console.log(a);
}
for (let a of colors) {
  console.log(colors[a]);
}

// conditional statement
// if statements(conditional statements) -- we only execute a block of code if the condition is true. we need an if keyword, open and closed bracket( for the condition) and a block of CSSKeywordValue
let AGE = 20;

if (AGE === 20) {
  console.log("You are matured enough");
} else {
  console.log("You are not qualified");
}

// concantination is combining two trings together

// ==========================================================
// 30th Jan 2025
// ==========================================================

let password = "pas123456789";
console.log(password.length);

if (password.length >= 12) {
  console.log("That is a very good password");
} else if (password.length >= 10) {
  console.log("That is a good password");
} else if (password.length >= 4) {
  console.log("That is a weak password");
} else {
  console.log("password must be atleast 4 chrs and max of 12 chrs");
}

// Logical operators
// || (double pipe) means logical OR
// && (ampersand) means logical AND

// FOR LOGICAL AND
// true && true = true
// true && false = false
// false && true = false
// false && false = false

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// FOR LOGICAL OR
// true || true = true
// true || false = true
// false || true = true
// false || false = false

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

let PASSWORD = "pass&";

if (
  (PASSWORD.length === 5 && PASSWORD.includes("@")) ||
  PASSWORD.length >= 8 ||
  PASSWORD.includes("&")
) {
  console.log(`That is a very stong password`);
} else if (PASSWORD.length >= 4 && PASSWORD.includes("@")) {
  console.log(`That is a good password`);
} else {
  console.log("password is not long enough");
}

// Task
// Given an integer, n, perform the following conditional actions:

// If n is odd, log to the console odd number

// If n is even, log to console even number

// let integer = prompt("Type of number");

/*if (integer % 2 === 0) {
  alert("The number is even");
} else {
  alert("The number is odd");
}*/

// solution;
let n = 17;

if (n % 2 === 0) {
  console.log("even number");
} else {
  console.log("old number");
}

// if statement vs switch statement

let points = "Z";

if (points === "A") {
  console.log("you got A");
} else if (points === "B") {
  console.log("you got B");
} else if (points === "C") {
  console.log("you got C");
} else if (points === "D") {
  console.log("you got D");
} else {
  console.log("Guy you don fail, try to dey attend class");
}

let GRADE = "B";

switch (GRADE) {
  case "A":
    console.log("You got A");
    break;
  case "B":
    console.log("You got B");
    break;
  case "C":
    console.log("You got C");
    break;
  case "D":
    console.log("You got D");
    break;
  default:
    console.log("Guy you don fail, try to dey attend class");
}

// Global scope, Block scope and function scope

let myAge = 100;
if (myAge) {
  let myAge = 200;
  console.log("inside 1st block of code: " + myAge);
  if (myAge) {
    let myAge = 300;
    console.log("inside 2nd block of code: " + myAge);
  }
}

console.log("outside block of code:" + myAge);

// Take Home 2
// Q-   Using data below..calculate the BMI for both Wonder and Muzeenat.. and also with a conditional satement..if Wonder's BMI is greater than Muzeenat..log to the console Wonder's BMI is greater than Muzeenat, else-------

// BMI = mass/height ** 2

// Given that Wonder/Muzeenat height  10/9
// Given that Wonder/Muzeenat mass  60/70

// Hint use if and else statement but if the spirit leads use ternary operator
// cc and past your codes as soons as you are done

/*Solution
using Ternary Operator*/
let wonder = {
  mass: 60,
  height: 10,
};

let muzeenat = {
  mass: 70,
  height: 9,
};

let wonderBMI = wonder.mass / wonder.height ** 2;
let muzeenatBMI = muzeenat.mass / muzeenat.height ** 2;

console.log(
  wonderBMI > muzeenatBMI ? "wonderBMI is greater" : muzeenatBMI > wonderBMI,
  "muzeenatBMI is greater"
);

// Using Nested Ternary operations

let marks = 70;

// nested ternary operation
// method 1
let res2 =
  marks < 40
    ? "poor"
    : marks < 60
    ? "Average"
    : marks < 80
    ? "Good"
    : "Excellent";

console.log(res2);

// method 2
console.log(
  marks < 40
    ? "poor"
    : marks < 60
    ? "Average"
    : marks < 80
    ? "Good"
    : "Excellent"
);
// ternaryoperation
let time = 10;
let greeting = time <= 12 ? "good morning!" : "good afternoon!";
console.log(greeting);

// Functions
// Functions are simply re-usable block of code that performs a given task. They have to be called or involved B4 they can work
// There are 3 types of funtions (Declarations, Expression and Arrow function)
// A functionis used by using function keyword, a function name and a block of code

// ftn Declaration
function getTeam() {
  let name = "Daniel";
  console.log(name);
}

getTeam();

// Ftn expression
let getSpeaker = function () {
  let country = "Senegal";
  console.log(country);
};
getSpeaker();

// Arrow ftn
// Arrow function
let newTrainer = () => {
  let myColor = "yellow";
  console.log(myColor);
};

newTrainer();

// Parameters and arguments in functions
function getName(username) {
  let person = `Hi, my name is ${username}`;
  console.log(person);
}
getName("Sam");

// ===========================================

let getAge = function (nameOfClient, clientYearOfBirth) {
  let clientAge = `${nameOfClient} is ${2025 - clientYearOfBirth} years old`;
  console.log(clientAge);
};

getAge("Daniel", 1986);
getAge("Endy", 1990);
getAge("Emma", 1956);

 function getnumber (number1, number2) {
  let number = `${number1+number2}`;
  console.log(number);

};

getnumber (4,6);

// Returning variables from a ftn
// Return key word signifies the end of a ftn and it is not cpmpulsory for you to return from a ftn, only when you need to 
// Return keyword is used to return a variable from a ftn, in that case the variable wouldnt just be in ftn scope anymore, it cn br accessible outside of ftn
// Note that, anything typed after the return keyword would be inactive 

let getProgramme = ()=> {
  let stack = "javascript fullstack";
  // console.log(stack);
  return stack;
}
let newstack = getProgramme();

// console.log(stack);

let newApplicant = `Hi, Muzeenat did you know that techstudio offers ${newstack}`;
console.log(newApplicant);

// arrow ftn advantage 
let getword =street=>console.log("we are live at" + street);
getword("Onipanu")


let averageOfthreeNumbers = (num1, num2, num3) => {
  let averageOfthreeNumbers = (num1 + num2 + num3) / 3;
  console.log(averageOfthreeNumbers);
};
averageOfthreeNumbers(5, 15, 25);

let getAveNumbers = (num1, num2, num3) => console.log((num1 + num2 + num3) / 3);
getAveNumbers(5, 15, 25);