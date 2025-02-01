const score = {
  win: 0,
  lose: 0,
  tie: 0
};

const savedScore = localStorage.getItem('score');
if (savedScore) {
  Object.assign(score, JSON.parse(savedScore));
}

function check(userMove) {
  const gen = Math.floor(Math.random() * 3) + 1;

  let CompMove = gen == 1 ? "rock" : gen == 2 ? "paper" : "scissor";
  if (userMove == CompMove) {
    score.tie = score.tie + 1;
    document.querySelector('.statement').innerText="GAME is TIE";
    document.querySelector('.computer-move').innerText=`Computer move:${CompMove}`;
    document.querySelector('.result').innerText=`wins:${score.win}, loses:${score.lose}, ties:${score.tie}`

  }

  else if ((userMove == 'rock' && CompMove == "scissor") ||
    (userMove == 'paper' && CompMove == 'rock') ||
    (userMove == 'scissor' && CompMove == 'paper')) {
    score.win = score.win + 1;
    document.querySelector('.statement').innerText="you WON the game";
    document.querySelector('.computer-move').innerText=`Computer move:${CompMove}`;
    document.querySelector('.result').innerText=`wins:${score.win}, loses:${score.lose}, ties:${score.tie}`




  }
  else {
    score.lose = score.lose + 1;
    document.querySelector('.statement').innerText="you LOSE the game";
    document.querySelector('.computer-move').innerText=`Computer move:${CompMove}`;
    document.querySelector('.result').innerText=`wins:${score.win}, loses:${score.lose}, ties:${score.tie}`



  }
localStorage.setItem("score",JSON.stringify(score));

}