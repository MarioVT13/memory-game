import { FlatList, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { horizontalScale, verticalScale } from "../../../utils/ScalingUtil";
import Card from "./Card";

type DataType = {};

export default function GameArea() {
  const allCards = [...Array(8).keys()];

  return (
    <View style={styles.parentContainer}>
      <FlatList
        data={allCards}
        renderItem={({ item, index }) => <Card index={index} item={item} />}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
        // keyExtractor={(item: DataType, index: number) =>
        //   `${item.id}_${index}`
        // }
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
    backgroundColor: "red",
  },
});
