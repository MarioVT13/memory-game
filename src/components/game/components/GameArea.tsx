import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { prepareCards } from "../../../utils/RandomShuffleUtil";
import Card from "./Card";
import VictoryMessage from "./VictoryMessage";
import useGameTimer from "../../../hooks/useGameTimer";

export default function GameArea({ difficulty }: { difficulty: number }) {
  const numColumns = difficulty + 2; // Adjust columns based on difficulty
  const activeCards = useMemo(() => prepareCards(difficulty), [difficulty]);
  const timeoutRef = useRef<number | null>(null);

  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [matchedIds, setMatchedIds] = useState<number[]>([]);
  const { startTime, setStartTime, timeElapsed } = useGameTimer(
    activeCards.length,
    matchedIds.length
  );

  useEffect(() => {
    return () => {
      // Clear any running timeouts when the component unmounts
      clearTimeout(timeoutRef.current as number);
    };
  }, []);

  const handlePress = useCallback(
    (uniqueKey: string) => {
      if (selectedKeys.length === 0 && !startTime) {
        setStartTime(new Date());
      }

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
          timeoutRef.current = setTimeout(() => {
            setMatchedIds((prev) => [...prev, firstCard.id]);
            setSelectedKeys([]);
          }, 1000) as unknown as number;
        } else {
          // Not a match, show them for 2 seconds then hide
          timeoutRef.current = setTimeout(
            () => setSelectedKeys([]),
            2 * 1000
          ) as unknown as number;
        }
      }
    },
    [selectedKeys, activeCards]
  );

  const isCompletedGame = useMemo(() => {
    return matchedIds.length * 2 === activeCards.length;
  }, [matchedIds.length, activeCards.length]);

  return (
    <View style={styles.parentContainer}>
      {isCompletedGame ? (
        <VictoryMessage time={timeElapsed} />
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
    alignItems: "center",
  },

  flatListContainer: {
    paddingVertical: "5%",
    paddingHorizontal: "2%",
  },
});
