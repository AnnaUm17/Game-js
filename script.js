const button = document.getElementById('button');
const level = document.getElementById('level');
const wrapperGame = document.querySelector('.wrap-game');

let levels = document.querySelectorAll('.level__game');
levels.forEach(level => {
  level.addEventListener('click', () => {
    levels.forEach(lvl => lvl.classList.remove('active'));
    level.classList.add('active');
  })
})

function deleteCards() {
  document.querySelector('.wrapper').style.display = 'block';
  wrapperGame.style.display = 'none';
  wrapperGame.innerHTML = '';
  wrapperGame.className = 'wrap-game';
}


function renderCard(number) {
  for(let i=0; i<number; i++) {
    let card = document.createElement ('div');
    let cardInner = document.createElement ('div');
    let cardFront = document.createElement ('div');
    let cardBack = document.createElement ('div');

    card.className = 'flip-card';
    wrapperGame.appendChild(card);

    cardInner.className = 'flip-card__inner';
    card.appendChild(cardInner);

    cardFront.className = 'flip-card__front';
    cardInner.appendChild(cardFront);

    cardBack.className = 'flip-card__back';
    cardInner.appendChild(cardBack);

    let rotate = () => {
      let number = Math.round(Math.random());
      cardInner.classList.toggle('rotate');
      if (number === 1) cardBack.classList.add('flip-card__back-bug');
      let cards = document.querySelectorAll('.flip-card');
      cards.forEach(card => card.addEventListener('click', deleteCards));
      }
      card.addEventListener('click', rotate);
  }
}

function chooseLevel(level) {
  switch(level) {
    case 'Простой':
    renderCard(3);
    wrapperGame.classList.add('easy');
    break;
    case 'Средний':
    renderCard(6);
    wrapperGame.classList.add('middle');
    break;
    case 'Сложный':
    renderCard(9);
    wrapperGame.classList.add('hard');
    break;
  }
}

function startGame() {
  let level = document.querySelector('.active').innerText;
  chooseLevel(level);
  document.querySelector('.wrapper').style.display = 'none';
  wrapperGame.style.display = 'flex';
}

button.addEventListener('click', startGame);
