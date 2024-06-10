import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { horizontalScale } from "../../../utils/ScalingUtil";
import { useEffect, useRef } from "react";

export default function NewGameButton({
  onSelectNewGame,
}: {
  onSelectNewGame: () => void;
}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true, // Using native driver for better performance
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.parentContainer, { opacity: fadeAnim }]}>
      <TouchableOpacity
        style={styles.newGameContainer}
        onPress={onSelectNewGame}
      >
        <View style={styles.newGameIcon}>
          <Icon name={"refresh"} size={horizontalScale(28)} color={"#000"} />
        </View>
        <Text style={styles.newGameLabel}>New Game</Text>
      </TouchableOpacity>
    </Animated.View>
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
