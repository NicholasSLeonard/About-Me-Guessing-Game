/* eslint-disable no-unused-vars */
'use strict';


let userName = prompt('What is your name?');

alert('Hello ' + userName);

// let btn = document.getElementById("myButton");
// btn.addEventListener("click",quiz,false);
quiz();

function quiz() {
  alert('For this quiz type yes (or y) or no (or n)');
  let myLocation = validateYN(prompt('I grew up on the canary Islands, right?'), 'I grew up on the canary Islands, right?');
  if (myLocation === 'N' || myLocation === 'NO') {
    alert('Correct! I grew up on the Cayman Islands');
    //console.log('correct!');
  }
  else {
    alert('Incorrect! I grew up on the Cayman Islands');
    //console.log('incorrect!');
  }

  let myEducation = validateYN(prompt('I was in the British education system, right?'), 'I was in the British education system, right?');
  if (myEducation === 'Y' || myEducation === 'YES') {
    alert('Correct! I was in the British education system');
    //console.log('correct!');
  }
  else {
    alert('Incorrect! I was in the British education system');
    //console.log('incorrect!');
  }
  let myDegree = validateYN(prompt('I am working towards my Software Engineering degree, right?'), 'I am working towards my Software Engineering degree, right?');
  if (myDegree === 'Y' || myDegree === 'YES') {
    alert('Incorrect! I am working towards my computer science degree');
    //console.log('incorrect!');
  }
  else {
    alert('Correct! I am working towards my computer science degree');
    //console.log('correct!');
  }

  let myAlevels = validateYN(prompt('I took my A levels in college, right?'), 'I took my A levels in college, right?');
  if (myAlevels === 'Y' || myAlevels === 'YES') {
    alert('Incorrect! I took my A levels in high school.');
    //console.log('incorrect!');
  }
  else {
    alert('Correct! I took my A levels in high school.');
    //console.log('correct!');
  }

  let mySport = validateYN(prompt('I played basketball, right?'), 'I played basketball, right?');
  if (mySport === 'N' || mySport === 'NO') {
    alert('Correct! I played tennis and baseball');
    //console.log('correct!');
  }
  else {
    alert('Incorrect! I played tennis and baseball');
    //console.log('incorrect!');
  }

}

function validateYN(userInput, question) {
  userInput = userInput.toUpperCase();
  while (userInput !== 'Y' && userInput !== 'N' && userInput !== 'YES' && userInput !== 'NO') {
    alert('For this quiz type yes (or y) or no (or n)');
    userInput = prompt(question);
    userInput = userInput.toUpperCase();
  }
  return userInput;
}
