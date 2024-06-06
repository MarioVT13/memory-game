import { StyleSheet, Text, View } from "react-native";
import { horizontalScale } from "../utils/ScalingUtil";

export default function TitleHeader() {
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.title}>Yara Memory Game</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    height: "15%",
    paddingTop: "20%",
    alignItems: "center",
    width: "100%",
  },
  title: {
    position: "absolute",
    bottom: "15%",
    fontSize: horizontalScale(27),
    fontWeight: "bold",
    textAlign: "center",
  },
});
