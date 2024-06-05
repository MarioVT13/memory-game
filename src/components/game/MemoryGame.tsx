import { StyleSheet, Text, View } from "react-native";

export default function MemoryGame() {
  return (
    <View style={styles.parentContainer}>
      <View style={{ width: 100, height: 100, backgroundColor: "orange" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    width: "100%",
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
