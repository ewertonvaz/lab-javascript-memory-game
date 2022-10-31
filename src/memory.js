class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (this.cards === undefined) {
      return undefined;
    }
    // ... write your code here
    for(let i = this.cards.length - 1; i >= 0; i--){
      let j = this.getRandomInt(0, i);
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === 0) {
      return false;
    }
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
