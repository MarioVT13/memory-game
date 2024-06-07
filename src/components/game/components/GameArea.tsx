import { FlatList, StyleSheet, View } from "react-native";
import { prepareCards } from "../../../utils/RandomShuffleUtil";
import Card from "./Card";

export default function GameArea({ difficulty }: { difficulty: number }) {
  const allCards = prepareCards(difficulty);
  const numColumns = difficulty + 2; // we need 2, 3 or 4 columns

  //   console.log("allCards: ", allCards);

  return (
    <View style={styles.parentContainer}>
      <FlatList
        data={allCards}
        renderItem={({ item, index }) => (
          <Card item={item} index={index} numColumns={numColumns} />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={numColumns}
        contentContainerStyle={styles.flatListContainer}
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
