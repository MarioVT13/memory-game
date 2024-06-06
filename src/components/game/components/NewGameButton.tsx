import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { horizontalScale } from "../../../utils/ScalingUtil";

export default function NewGameButton({
  onSelectNewGame,
}: {
  onSelectNewGame: () => void;
}) {
  return (
    <View style={styles.parentContainer}>
      <TouchableOpacity
        style={styles.newGameContainer}
        onPress={onSelectNewGame}
      >
        <View style={styles.newGameIcon}>
          <Icon name={"refresh"} size={horizontalScale(28)} color={"#000"} />
        </View>
        <Text style={styles.newGameLabel}>New Game</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  newGameContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginBottom: "5%",
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
