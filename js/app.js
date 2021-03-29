"use strict";
let userName = prompt("What is your name?");
let correctAnswer = 0;
// console.log("Hello " +userName +" welcome to this guessing game, I hope you will have fun");
alert(
  "Hello " +
    userName +
    " welcome to this guessing game, I hope you will have fun"
);

let myAge = prompt("Am I 22 years old?");
let myAgeLower = myAge.toLowerCase();

if (myAgeLower === "yes" || myAgeLower === "y") {
  alert("yes my age is 22");
  correctAnswer += 1;
  //   console.log("yes my age is 22");
} else {
  alert("Wrong, I am 22 years old");
  //   console.log("Wrong, I am 22 years old");
}

let myName = prompt("Is my name Mahmoud?");
let myNameLower = myName.toLowerCase();

if (myNameLower === "yes" || myNameLower === "y") {
  alert("yes my name is Mahmoud");
  correctAnswer += 1;
  //   console.log("yes my name is Mahmoud");
} else {
  alert("Wrong, this is me");
  //   console.log("Wrong, this is me");
}

let myAbility = prompt("Can i do 500 push ups ?");
let myAbilityLower = myAbility.toLowerCase();

if (myAbilityLower === "yes" || myAbilityLower === "y") {
  alert("Wrong answer, unfortunately I can't");
  //   console.log("Wrong answer, unfortunately I can't");
} else {
  alert("Yes I can not, unfortunately");
  correctAnswer += 1;
  //   console.log("Yes I can not, unfortunately");
}

let myHome = prompt("Do I live in Al-Zarqa ?");
let myHomeLower = myHome.toLowerCase();

if (myAbilityLower === "yes" || myAbilityLower === "y") {
  alert("Wrong answer, I live in Amman");
  //   console.log("Wrong answer, I live in Amman");
} else {
  alert("Yes I don't live in Al-Zarqa I live in Amman");
  correctAnswer += 1;
  //   console.log("Yes I don't live in Al-Zarqa I live in Amman");
}

let myTall = prompt("Am I 173 cm tall?");
let myTallLower = myTall.toLowerCase();

if (myTallLower === "yes" || myTallLower === "y") {
  alert("yes I am 173 cm tall");
  correctAnswer += 1;
  //   console.log("yes I am 173 cm tall");
} else {
  // console.log("Wrong, I am 173 cm tall");
  alert("Wrong, I am 173 cm tall");
}

alert(
  userName +
    " answered " +
    correctAnswer +
    " questions correctly from 5, I hope you had fun"
);
