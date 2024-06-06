import { StyleSheet, Text, View } from "react-native";
import { verticalScale } from "../../../utils/ScalingUtil";

export default function Card({ item, index }: { item: number; index: number }) {
  const middleMarginBetweenItems = index % 2 == 0 ? verticalScale(10) : 0;

  return (
    <View
      key={`${index}`}
      style={[styles.card, { marginRight: middleMarginBetweenItems }]}
    >
      <Text>{item}</Text>
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
