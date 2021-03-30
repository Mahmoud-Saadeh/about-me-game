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
} else if (myAgeLower === "no" || myAgeLower === "n") {
  alert("Wrong, I am 22 years old");
  //   console.log("Wrong, I am 22 years old");
} else {
  alert("Please answer with yes/no or y/n");
  //   console.log("Please answer with yes/no or y/n");
}

let myName = prompt("Is my name Mahmoud?");
let myNameLower = myName.toLowerCase();

if (myNameLower === "yes" || myNameLower === "y") {
  alert("yes my name is Mahmoud");
  correctAnswer += 1;
  //   console.log("yes my name is Mahmoud");
} else if (myAgeLower === "no" || myAgeLower === "n") {
  alert("Wrong, this is me");
  //   console.log("Wrong, this is me");
} else {
  alert("Please answer with yes/no or y/n");
  //   console.log("Please answer with yes/no or y/n");
}

let myAbility = prompt("Can i do 500 push ups ?");
let myAbilityLower = myAbility.toLowerCase();

if (myAbilityLower === "yes" || myAbilityLower === "y") {
  alert("Wrong answer, unfortunately I can't");
  //   console.log("Wrong answer, unfortunately I can't");
} else if (myAbilityLower === "no" || myAbilityLower === "n") {
  alert("Yes I can not, unfortunately");
  correctAnswer += 1;
  //   console.log("Yes I can not, unfortunately");
} else {
  alert("Please answer with yes/no or y/n");
  //   console.log("Please answer with yes/no or y/n");
}

let myHome = prompt("Do I live in Al-Zarqa ?");
let myHomeLower = myHome.toLowerCase();

if (myHomeLower === "yes" || myHomeLower === "y") {
  alert("Wrong answer, I live in Amman");
  //   console.log("Wrong answer, I live in Amman");
} else if (myHomeLower === "no" || myHomeLower === "n") {
  alert("Yes I don't live in Al-Zarqa I live in Amman");
  correctAnswer += 1;
  //   console.log("Yes I don't live in Al-Zarqa I live in Amman");
} else {
  alert("Please answer with yes/no or y/n");
  //   console.log("Please answer with yes/no or y/n");
}

let myTall = prompt("Am I 173 cm tall?");
let myTallLower = myTall.toLowerCase();

if (myTallLower === "yes" || myTallLower === "y") {
  alert("yes I am 173 cm tall");
  correctAnswer += 1;
  //   console.log("yes I am 173 cm tall");
} else if (myTallLower === "no" || myTallLower === "n") {
  // console.log("Wrong, I am 173 cm tall");
  alert("Wrong, I am 173 cm tall");
} else {
  alert("Please answer with yes/no or y/n");
  //   console.log("Please answer with yes/no or y/n");
}

let userNum = prompt("Guess a number between 1 and 10");
let num = Number(userNum);
let chances = 4;
let randomNum = Math.floor(Math.random() * 10) + 1;
for (let i = 0; i < 4; i++) {
  if (chances !== 4) {
    num = Number(prompt("Guess a number between 1 and 10"));
  }

  if (num === randomNum) {
    alert("You guessed right, I picked " + randomNum);
    correctAnswer++;
    chances--;
    break;
  } else if (chances === 1) {
    alert("you lost, The correct answer was " + randomNum);
  } else if (num > randomNum) {
    chances--;
    alert(`Your guess is high, you have ${chances} trys left`);
  } else if (num < randomNum) {
    chances--;
    alert(`Your guess is low, you have ${chances} trys left`);
  } else {
    chances--;
    alert(`Please enter a number, you have ${chances} trys left`);
  }
}

let userArrayAns = prompt(
  "I read 6 from Dostoevsky's books can you guess any of them?"
);
let userArrayAnsLower = userArrayAns.toLowerCase();
let chancesArr = 6;
let books = [
  "crime and punishment",
  "the brothers karamazov",
  "demons",
  "the idiot",
  "underground",
  "the gambler",
];
let right = 0;
for (let v = books.length; v > 0; v--) {
  right = 1;
  if (v < 6) {
    userArrayAns = prompt(`Your guess is wrong, try again, ${v} trys left`);
    userArrayAnsLower = userArrayAns.toLowerCase();
  }
  for (let i = 0; i < books.length; i++) {
    if (userArrayAnsLower === books[i]) {
      alert(`You guessed right, I read ${books}`);
      right++;
      correctAnswer++;
      break;
    }
  }

  if (right === 2) {
    break;
  }
}

alert(
  userName +
    " answered " +
    correctAnswer +
    " questions correctly from 7, I hope you had fun"
);
// if (chancesArr !== 6) {
//   userArrayAns = prompt(`Guess again, you have ${chancesArr} trys left`);
//   userArrayAnsLower = userArrayAns.toLowerCase();
// }

// if (books.indexOf(userArrayAnsLower) !== -1) {
//   alert(
//     "You guessed right, I read crime and punishment, the brothers karamazov, and demons"
//   );
//   correctAnswer++;
//   chancesArr--;
//   break;
// } else if (chancesArr === 1) {
//   alert(
//     "you lost, The correct answers were crime and punishment, the brothers karamazov, and demons"
//   );
// } else if (books.indexOf(userArrayAnsLower) === -1) {
//   chancesArr--;
//   alert(`Your guess is wrong, you have ${chancesArr} trys left`);
// }
// else if (userArrayAnsLower !== books[i] && wrong === 0 && right === 0) {

//   alert(`You guess is wrong, try again, ${v} trys left`);
//   chancesArr--;
//   wrong = 1;
//   break;
// }
