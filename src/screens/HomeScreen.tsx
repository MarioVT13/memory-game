import { StyleSheet, Text, View } from "react-native";
import { horizontalScale } from "../utils/ScalingUtil";
import MemoryGameMain from "../components/game/MemoryGameMain";

export default function HomeScreen() {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Yara Memory Game</Text>
      </View>
      <View style={styles.contentContainer}>
        <MemoryGameMain />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  titleContainer: {
    marginTop: "10%",
    backgroundColor: "pink",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: horizontalScale(28),
    fontWeight: "bold",
    textAlign: "center",
  },
  contentContainer: {
    backgroundColor: "lightblue",
    alignItems: "center",
    width: "100%",
  },
});
