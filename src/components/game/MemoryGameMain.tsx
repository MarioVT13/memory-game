import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { horizontalScale } from "../../utils/ScalingUtil";
import GameArea from "./components/GameArea";
import NewGameButton from "./components/NewGameButton";

export default function MemoryGameMain() {
  return (
    <View style={styles.parentContainer}>
      <NewGameButton />
      <GameArea />
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    height: "85%",
    width: "100%",
    backgroundColor: "lightyellow",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
