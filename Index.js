'use strict';
let score = 20;
let Secretnumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guessvalue = Number(document.querySelector('.guess').value);
  if (!guessvalue) {
    document.querySelector('.message').textContent = ' No Number entered 😂';
  } else if (Secretnumber === guessvalue) {
    document.querySelector('.message').textContent = ' Correct Number 👌';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = Secretnumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (Secretnumber < guessvalue) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' To High ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game ';
    }
  } else if (Secretnumber > guessvalue) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' To Low ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game ';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  Secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start Guessing ..';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
