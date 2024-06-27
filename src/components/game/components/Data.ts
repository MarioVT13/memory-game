type GameModes = {
  id: number;
  mode: string;
};

export const gameModes: GameModes[] = [
  { id: 0, mode: "easy" },
  { id: 1, mode: "medium" },
  { id: 2, mode: "hard" },
];

export type CountMap = {
  [key: number]: number;
};

export const cardCountMap: CountMap = {
  0: 8,
  1: 12,
  2: 16,
};

export interface CardDataType {
  id: number;
  image: number; // require paths are resolved into a numeric handle by the React Native packager
}

export interface ExtendedCardDataType extends CardDataType {
  uniqueKey: string; // Unique key (added during processing) for handling duplicates
}

const cardsData: CardDataType[] = [
  {
    id: 0,
    image: require("../../../../assets/cards/1.png"),
  },
  {
    id: 1,
    image: require("../../../../assets/cards/2.png"),
  },
  {
    id: 2,
    image: require("../../../../assets/cards/3.png"),
  },
  {
    id: 3,
    image: require("../../../../assets/cards/4.png"),
  },
  {
    id: 4,
    image: require("../../../../assets/cards/5.png"),
  },
  {
    id: 5,
    image: require("../../../../assets/cards/6.png"),
  },
  {
    id: 6,
    image: require("../../../../assets/cards/7.png"),
  },
  {
    id: 7,
    image: require("../../../../assets/cards/8.png"),
  },
];

export default cardsData;
