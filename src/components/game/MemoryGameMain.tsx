import { useState } from "react";
import { StyleSheet, View } from "react-native";
import GameArea from "./components/GameArea";
import NewGameButton from "./components/NewGameButton";
import SelectDifficulty from "./components/SelectDifficulty";

export default function MemoryGameMain() {
  const [showDifficulty, setShowDifficulty] = useState<boolean>(true);
  const [selectedDifficulty, setSelectedDifficulty] = useState<number>(0);

  const handleSelection = (val: number) => {
    setSelectedDifficulty(val);
    setShowDifficulty(false);
  };

  return (
    <View style={styles.parentContainer}>
      {showDifficulty ? (
        <SelectDifficulty onSelectDifficulty={handleSelection} />
      ) : (
        <>
          <NewGameButton onSelectNewGame={() => setShowDifficulty(true)} />
          <GameArea difficulty={selectedDifficulty} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    height: "85%",
    width: "100%",
    backgroundColor: "lightyellow",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
