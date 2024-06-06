import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { horizontalScale } from "../../../utils/ScalingUtil";

export default function GameArea() {
  return <View style={styles.parentContainer}></View>;
}

const styles = StyleSheet.create({
  parentContainer: {
    width: "100%",
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
});
