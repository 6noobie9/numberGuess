'use strict';

/*
console.log(document.querySelector('.message').textContent);
console.log(
  (document.querySelector('.message').textContent = 'Correct Number!🥳')
);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 10;
*/

let number = Math.trunc(Math.random() * 100 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(typeof guess);

  // No input Condition or Wrong input
  if (!guess || guess < 0 || guess > 100) {
    displayMessage('Enter a Number Between 1 - 100');

    // Winning Condition
  } else if (guess === number) {
    displayMessage('Congratulations!🥳');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = number;

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // When Guess is WRONG
  else if (guess !== number) {
    if (score > 1) {
      displayMessage(
        guess > number ? 'Lower Number Plaease📉' : 'Higher Number Please📈'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Are Trash🗑');
      document.querySelector('body').style.backgroundColor = '#ef233c';
      document.querySelector('.number').textContent = '🤮';
    }
  }
});

// Resetting the Game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 100 + 1);
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
