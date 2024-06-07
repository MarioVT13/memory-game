interface GameModes {
  id: number;
  mode: string;
}

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

export type CardDataType = {
  id: number;
  image: string;
};

const cardsData: CardDataType[] = [
  {
    id: 0,
    image: require("../../../../assets/products/01_Yara-NTester.png"),
  },
  {
    id: 1,
    image: require("../../../../assets/products/02_YaraTera.png"),
  },
  {
    id: 2,
    image: require("../../../../assets/products/03_YaraBela.png"),
  },
  {
    id: 3,
    image: require("../../../../assets/products/04_YaraVita.png"),
  },
  {
    id: 4,
    image: require("../../../../assets/products/05_YaraVera.png"),
  },
  {
    id: 5,
    image: require("../../../../assets/products/06_YaraRega.png"),
  },
  {
    id: 6,
    image: require("../../../../assets/products/07_YaraMila.png"),
  },
  {
    id: 7,
    image: require("../../../../assets/products/08_YaraLiva.png"),
  },
];

export default cardsData;
