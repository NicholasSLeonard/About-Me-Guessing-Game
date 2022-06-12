'use strict';


let userName = prompt('What is your name?');

alert('Hello ' + userName);


let userScore = 0;
question ();
guessMyNumber ();
guessMyFavorites ();

function question() {

  alert('For this quiz type yes (or y) or no (or n)');
  let myLocation = validateYN(prompt('I grew up on the canary Islands, right?'), 'I grew up on the canary Islands, right?');
  if (myLocation === 'N' || myLocation === 'NO') {
    alert('Correct! I grew up on the Cayman Islands');
    userScore++;
  }
  else {
    alert('Incorrect! I grew up on the Cayman Islands');
  }

  let myEducation = validateYN(prompt('I was in the British education system, right?'), 'I was in the British education system, right?');
  if (myEducation === 'Y' || myEducation === 'YES') {
    alert('Correct! I was in the British education system');
    userScore++;
  }
  else {
    alert('Incorrect! I was in the British education system');
  }
  let myDegree = validateYN(prompt('I am working towards my Software Engineering degree, right?'), 'I am working towards my Software Engineering degree, right?');
  if (myDegree === 'Y' || myDegree === 'YES') {
    alert('Incorrect! I am working towards my computer science degree');
  }
  else {
    alert('Correct! I am working towards my computer science degree');
    userScore++;
  }

  let myAlevels = validateYN(prompt('I took my A levels in college, right?'), 'I took my A levels in college, right?');
  if (myAlevels === 'Y' || myAlevels === 'YES') {
    alert('Incorrect! I took my A levels in high school.');
  }
  else {
    alert('Correct! I took my A levels in high school.');
    userScore++;
  }

  let mySport = validateYN(prompt('I played basketball, right?'), 'I played basketball, right?');
  if (mySport === 'N' || mySport === 'NO') {
    alert('Correct! I played tennis and baseball');
    userScore++;
  }
  else {
    alert('Incorrect! I played tennis and baseball');
  }

}

function guessMyNumber() {

  let myNum = 5;
  let guess = 0;
  for (let i = 0; i < 4; i++) {
    guess = Number(prompt('I am thinking of a number between 1 and 10...'));
    if (guess > myNum) {
      alert('oops, too high');
    }
    else if (guess < myNum) {
      alert('oops, too low');
    }
    else if (guess === myNum) {
      alert('WOW you got it!');
      userScore++;
      break;
    }
  }
  if (guess !== myNum) {
    alert('My number was ' + myNum);
  }
}

function guessMyFavorites() {

  let friendGames = ['call of duty', 'league of legends', 'overwatch', 'halo', 'overwatch', 'csgo'];
  let userGuess;
  for (let i = 0; i < 6; i++) {
    userGuess = prompt('Guess a video game I play with my friends.').toLowerCase();
    for (let k = 0; k < 6; k++) {
      if (userGuess === friendGames[k]) {
        alert('Yay you got one. I play call of duty, league of legends, overwatch, halo, overwatch, and csgo with my friends');
        userScore++;
        i = 6;
      }
    }
  }
}
alert('You got ' + userScore + ' out of 7!');

function validateYN(userInput, question) {
  userInput = userInput.toUpperCase();
  while (userInput !== 'Y' && userInput !== 'N' && userInput !== 'YES' && userInput !== 'NO') {
    alert('For this quiz type yes (or y) or no (or n)');
    userInput = prompt(question);
    userInput = userInput.toUpperCase();
  }
  return userInput;
}
