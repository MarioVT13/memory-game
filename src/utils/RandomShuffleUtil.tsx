import cardsData, { cardCountMap } from "../components/game/components/Data";

// Utility to shuffle array

// The shuffleArray algorithm itself is not my creation.
// The name of the author is Fisher Yates.
// This is one of the most famous and solid algorithms for shuffling arrays.
// There is no way I can top this, so I just borrowed it here :)

function shuffleArray(array: any[]) {
  //  <<-- Fisher Yates -->>  //
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

// Prepare cards based on difficulty
export function prepareCards(difficulty: number) {
  const count = cardCountMap[difficulty] / 2;

  const shuffledCards = shuffleArray(cardsData);
  const selectedCards = shuffledCards.slice(0, count);

  // Duplicate and shuffle the selected cards to ensure the game setup
  const duplicatedCards = [...selectedCards, ...selectedCards];
  return shuffleArray(duplicatedCards);
}
