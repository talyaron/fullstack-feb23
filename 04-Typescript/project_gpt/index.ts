interface Card {
    id: number;
    value: string;
    isFlipped: boolean;
  }
  
  const cards: Card[] = [
    { id: 1, value: 'A', isFlipped: false },
    { id: 2, value: 'A', isFlipped: false },
    { id: 3, value: 'B', isFlipped: false },
    { id: 4, value: 'B', isFlipped: false },
    { id: 5, value: 'C', isFlipped: false },
    { id: 6, value: 'C', isFlipped: false },
    { id: 7, value: 'D', isFlipped: false },
    { id: 8, value: 'D', isFlipped: false },
    // Add more pairs of cards as needed
  ];
  
  function shuffleCards(array: Card[]): Card[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function createCards(): void {
    const shuffledCards = shuffleCards(cards);
    const memoryGameElement = document.querySelector('.memory-game');
  
    if (memoryGameElement) {
      shuffledCards.forEach((card) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.id = card.id.toString();
        cardElement.dataset.value = card.value;
        memoryGameElement.appendChild(cardElement);
      });
    }
  }
  
  function flipCard(cardElement: HTMLElement): void {
    const cardId = cardElement.dataset.id;
    const card = cards.find((c) => c.id.toString() === cardId);
  
    if (card) {
      card.isFlipped = !card.isFlipped;
      cardElement.innerText = card.isFlipped ? card.value : '';
      cardElement.classList.toggle('flipped', card.isFlipped);
      checkForMatch();
    }
  }
  
  function checkForMatch(): void {
    const flippedCards = cards.filter((card) => card.isFlipped);
  
    if (flippedCards.length === 2) {
      if (flippedCards[0].value === flippedCards[1].value) {
        setTimeout(() => {
          flippedCards.forEach((card) => (card.isFlipped = false));
          const flippedElements = document.querySelectorAll('.card.flipped');
          flippedElements.forEach((element) => element.classList.remove('flipped'));
  
          if (cards.every((card) => !card.isFlipped)) {
            showWinMessage();
          }
        }, 1000);
      } else {
        setTimeout(() => {
          flippedCards.forEach((card) => (card.isFlipped = false));
          const flippedElements = document.querySelectorAll('.card.flipped');
          flippedElements.forEach((element) => element.classList.remove('flipped'));
        }, 1000);
      }
    }
  }
  
  function showWinMessage(): void {
    const winMessage = document.querySelector('.win-message');
    const restartButton = document.querySelector('.restart-button');
  
    if (winMessage && restartButton) {
      winMessage.style.display = 'block';
      restartButton.style.display = 'block';
      restartButton.addEventListener('click', resetGame);
    }
  }
  
  function resetGame(): void|Element {
    const memoryGameElement = document.querySelector('.memory-game');
    const winMessage = document.querySelector('.win-message');
    const restartButton = document.querySelector('.restart-button');
  
    if (memoryGameElement && winMessage && restartButton) {
      memoryGameElement.innerHTML = '';
      winMessage.style.display = 'none';
      restartButton.style.display = 'none';
      cards.forEach((card) => (card.isFlipped = false));
      createCards();
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    createCards();
    const memoryGameElement = document.querySelector('.memory-game');
    if (memoryGameElement) {
      memoryGameElement.addEventListener('click', (event) => {
        const clickedElement = event.target as HTMLElement;
        if (clickedElement.classList.contains('card') && !clickedElement.classList.contains('flipped')) {
          flipCard(clickedElement);
        }
      });
    }
  });
  