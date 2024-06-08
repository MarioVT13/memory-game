import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { prepareCards } from "../../../utils/RandomShuffleUtil";
import Card from "./Card";

export default function GameArea({ difficulty }: { difficulty: number }) {
  const initialCards = prepareCards(difficulty);
  const numColumns = difficulty + 2; // Adjust columns based on difficulty

  const [activeCards, setActiveCards] = useState(initialCards);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const handlePress = (uniqueKey: string) => {
    if (selectedKeys.includes(uniqueKey) || selectedKeys.length === 2) {
      // Prevent the player from opening more than 2 cards at a time
      return;
    }

    const newSelectedKeys = [...selectedKeys, uniqueKey];
    setSelectedKeys(newSelectedKeys);

    if (newSelectedKeys.length === 2) {
      const firstCard = activeCards.find(
        (card) => card.uniqueKey === newSelectedKeys[0]
      );
      const secondCard = activeCards.find(
        (card) => card.uniqueKey === newSelectedKeys[1]
      );

      if (firstCard?.id === secondCard?.id) {
        // Check by id
        setTimeout(() => {
          setActiveCards((prevCards) =>
            prevCards.filter((card) => card.id !== firstCard.id)
          );
          setSelectedKeys([]);
        }, 1000);
      } else {
        // Not a match, show them for a second then hide
        setTimeout(() => setSelectedKeys([]), 1000);
      }
    }
  };

  return (
    <View style={styles.parentContainer}>
      <FlatList
        data={activeCards}
        renderItem={({ item, index }) => (
          <Card
            item={item}
            index={index}
            numColumns={numColumns}
            onPress={() => handlePress(item.uniqueKey)}
            isFlipped={selectedKeys.includes(item.uniqueKey)}
          />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={numColumns}
        contentContainerStyle={styles.flatListContainer}
        keyExtractor={(item) => item.uniqueKey}
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
    paddingVertical: "5%",
    backgroundColor: "pink",
  },
});
