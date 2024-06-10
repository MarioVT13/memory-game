import { Animated, StyleSheet, Text, TouchableOpacity } from "react-native";
import { horizontalScale, verticalScale } from "../../../utils/ScalingUtil";
import { gameModes } from "./Data";
import { useEffect, useMemo, useRef } from "react";

export default function SelectDifficulty({
  onSelectDifficulty,
}: {
  onSelectDifficulty: (diff: number) => void;
}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true, // Using native driver for better performance
    }).start();
  }, []);

  const difficultyButtons = useMemo(
    () =>
      gameModes.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => onSelectDifficulty(item.id)}
          style={[styles.button, styles.shadowStyle]}
        >
          <Text style={styles.buttonText}>{item.mode?.toUpperCase()}</Text>
        </TouchableOpacity>
      )),
    [onSelectDifficulty]
  );

  return (
    <Animated.View style={[styles.parentContainer, { opacity: fadeAnim }]}>
      <Text
        style={[
          styles.buttonText,
          { fontSize: horizontalScale(20), marginBottom: "5%" },
        ]}
      >
        Select Difficulty
      </Text>
      {difficultyButtons}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    width: "100%",
    height: "80%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#fff",
    paddingHorizontal: horizontalScale(10),
    paddingVertical: horizontalScale(2),
    minWidth: "50%",
    alignItems: "center",
    marginBottom: verticalScale(12),
    borderWidth: 2,
    borderColor: "#000",
  },
  shadowStyle: {
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: "#000",
    fontSize: horizontalScale(35),
    fontWeight: "bold",
    textAlign: "center",
  },
});
