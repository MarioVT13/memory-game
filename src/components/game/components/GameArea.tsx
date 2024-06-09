import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { prepareCards } from "../../../utils/RandomShuffleUtil";
import Card from "./Card";
import VictoryMessage from "./VictoryMessage";

export default function GameArea({ difficulty }: { difficulty: number }) {
  const numColumns = difficulty + 2; // Adjust columns based on difficulty

  const [activeCards, setActiveCards] = useState(prepareCards(difficulty));
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [matchedIds, setMatchedIds] = useState<number[]>([]);

  useEffect(() => {
    setActiveCards(prepareCards(difficulty));
  }, [difficulty]);

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
        // Check if cards match by id
        setTimeout(() => {
          setMatchedIds((prev) => [...prev, firstCard.id]);
          setSelectedKeys([]);
        }, 1000);
      } else {
        // Not a match, show them for a second then hide
        setTimeout(() => setSelectedKeys([]), 1000);
      }
    }
  };

  const isCompletedGame = matchedIds?.length * 2 === activeCards?.length;

  return (
    <View style={styles.parentContainer}>
      {isCompletedGame ? (
        <VictoryMessage />
      ) : (
        <FlatList
          data={activeCards}
          renderItem={({ item, index }) => (
            <Card
              item={item}
              index={index}
              numColumns={numColumns}
              onPress={() => handlePress(item.uniqueKey)}
              isFlipped={selectedKeys.includes(item.uniqueKey)}
              isVisible={!matchedIds.includes(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={numColumns}
          contentContainerStyle={styles.flatListContainer}
          keyExtractor={(item) => item.uniqueKey}
        />
      )}
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
