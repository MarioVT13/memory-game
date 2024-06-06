import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { horizontalScale } from "../../../utils/ScalingUtil";

export default function NewGameButton() {
  return (
    <TouchableOpacity style={styles.parentContainer} onPress={() => {}}>
      <View style={styles.newGameIcon}>
        <Icon name={"refresh"} size={horizontalScale(30)} color={"#000"} />
      </View>
      <Text style={styles.newGameLabel}>New Game</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  newGameIcon: {
    backgroundColor: "lightgray",
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#000",
  },
  newGameLabel: {
    marginTop: "1%",
    fontSize: horizontalScale(17),
    fontWeight: "bold",
  },
});
