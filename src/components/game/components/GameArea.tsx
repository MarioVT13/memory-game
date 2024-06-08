import { FlatList, StyleSheet, View } from "react-native";
import { prepareCards } from "../../../utils/RandomShuffleUtil";
import Card from "./Card";
import { useEffect, useState } from "react";
import { ExtendedCardDataType } from "./Data";

export default function GameArea({ difficulty }: { difficulty: number }) {
  const initialCards = prepareCards(difficulty);
  const numColumns = difficulty + 2; // Adjust columns based on difficulty

  const [activeCards, setActiveCards] = useState(initialCards);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [matchedIndices, setMatchedIndices] = useState<number[]>([]);

  const handlePress = (index: number) => {
    if (selectedIndices.includes(index) || matchedIndices.includes(index)) {
      return;
    }

    const newSelectedIndices = [...selectedIndices, index];
    setSelectedIndices(newSelectedIndices);

    if (newSelectedIndices.length === 2) {
      const firstIndex = newSelectedIndices[0];
      const secondIndex = newSelectedIndices[1];
      const firstCard = activeCards[firstIndex];
      const secondCard = activeCards[secondIndex];

      if (firstCard.id === secondCard.id) {
        // Check by id
        setMatchedIndices((prev) => [...prev, firstIndex, secondIndex]);
        setSelectedIndices([]);
        // This setTimeout is to delay the removal, so users see the match
        setTimeout(() => {
          setActiveCards((prevCards) =>
            prevCards.filter((card) => card.id !== firstCard.id)
          );
        }, 1000);
      } else {
        // Not a match, show them for a second then hide
        setTimeout(() => {
          setSelectedIndices([]);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    // console.log("matchedIndices: ", matchedIndices);
    console.log("activeCards: ", activeCards);
  }, [activeCards]);

  return (
    <View style={styles.parentContainer}>
      <FlatList
        data={activeCards}
        renderItem={({ item, index }) => {
          //   console.log("A: ", selectedIndices.includes(index));
          //   console.log("B: ", matchedIndices.includes(index));

          const isFlipped =
            selectedIndices.includes(index) || matchedIndices.includes(index);
          return (
            <Card
              item={item}
              index={index}
              numColumns={numColumns}
              onPress={() => handlePress(index)}
              isFlipped={isFlipped}
            />
          );
        }}
        showsVerticalScrollIndicator={false}
        numColumns={numColumns}
        contentContainerStyle={styles.flatListContainer}
        key={`flatList_${activeCards.length}`}
        keyExtractor={(item: ExtendedCardDataType) => item?.uniqueKey}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    width: "100%",
    height: "80%",
    backgroundColor: "lightgreen",
    alignItems: "center",
  },

  flatListContainer: {
    alignItems: "center",
    paddingVertical: "5%",
    backgroundColor: "pink",
  },
});
