import { StyleSheet, Text, View } from "react-native";
import { verticalScale } from "../../../utils/ScalingUtil";
import { CardDataType } from "./Data";

type CardType = {
  item: CardDataType;
  index: number;
  numColumns: number;
};

export default function Card({ item, index, numColumns }: CardType) {
  // Remove marginRight on the last item in each row
  const marginRight =
    index % numColumns === numColumns - 1 ? 0 : verticalScale(10);

  //   console.log("item: ", item.image);

  return (
    <View
      key={`${item.id}`}
      style={[styles.card, { marginRight: marginRight }]}
    >
      <Text>{item.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: verticalScale(90),
    height: verticalScale(90),
    marginBottom: verticalScale(10),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue", // Just for visibility
    borderColor: "orange",
    borderWidth: 1,
  },
});
