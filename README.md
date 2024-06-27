# Memory Game

## Install notes

Install with `yarn` or `npm install`

Run with `npx expo start`

## Core Game Concept

- The card stack is always shuffled again when a new round starts.

- Restart button allows the user to reset the game and starts a new game round.

- The user is allowed to flip a single card (by tapping on it) that changes the card state to visible. The card's image stays visible until the user has tapped on another card in the grid.

- If there is a match, the 2 currently flipped cards will be eliminated from the game.

- If both cards don’t match, they will be flipped again (faced down) after 2 seconds and return to their initial state (hidden).

- Flipping more than 2 cards per round is not allowed!

## Additional features

- The user is allowed to choose between multiple levels of difficulties.

  - Easy (2x4 grid) | 8 cards (4 different images)

  - Medium (3x4 grid) | 12 cards (6 different images)

  - Hard (4x4 grid) | 16 cards (8 different images)
