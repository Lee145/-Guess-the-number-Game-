'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;



document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
const serectNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';

    displayMessage('🎃 No Number!');
  } else if (guess === serectNumber) {
    // document.querySelector('.message').textContent = '🎉Correct Number';

    displayMessage('🎉Correct Number!');
    document.querySelector('.number').textContent = serectNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== serectNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > serectNumber ? '📈Too High' : '📉Too Low';

      displayMessage(guess > serectNumber ? '📈Too High' : '📉Too Low');
      score--;

      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = '😥You lost the game !';

      displayMessage('😥You lost the game !');

      document.querySelector('.score').textContent = 0;
    }
  }
  // when guess is high
  //   } else if (guess > serectNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈Too High';
  //       score--;

  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😥You lost the game !';

  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < serectNumber) {
  //     document.querySelector('.message').textContent = '📉Too Low';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   }
});

let againBtn = document.querySelector('.again');
againBtn.addEventListener('click', function () {
  const serectNumber = Math.floor(Math.random() * 20 + 1);
  let score = 20;

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  //   document.querySelector('.message').textContent = '🤔Start Guessing....';
  displayMessage('🤔Start Guessing....');

  //   document.querySelector('.message').textContent = '🤔Start Guessing....';

  displayMessage('🤔Start Guessing....');

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';
});
