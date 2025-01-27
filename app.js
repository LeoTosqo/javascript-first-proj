"use strict";
// =======================================================
// 27th Jan 2025
// =======================================================

// VARIABlES, VALUES, ASSIGNMENT OPERATOR (=) AND DECLARATION
// Variables are storage facitilities for storing data or values
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
// let state = "lagos";
state = "kaduna";
console.log(state);

// CONST----declares
const FULLNAME = "Leo";
// const FULLNAME = "Emma";
console.log(FULLNAME);

// constraints in varables naming
// Varables names can only contain letters, numbers, underscore, dollar sign but it cant start with a number
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

let email = "askjeeves@hotmail, com";
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
