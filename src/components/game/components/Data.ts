interface GameModes {
  id: number;
  mode: string;
}

export const gameModes: GameModes[] = [
  { id: 0, mode: "easy" },
  { id: 1, mode: "medium" },
  { id: 2, mode: "hard" },
];

type CardDataType = {};
