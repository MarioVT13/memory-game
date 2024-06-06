import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { horizontalScale, verticalScale } from "../../../utils/ScalingUtil";
import { useState } from "react";
import { gameModes } from "./Data";

export default function SelectDifficulty({
  onSelectDifficulty,
}: {
  onSelectDifficulty: (diff: number) => void;
}) {
  return (
    <View style={styles.parentContainer}>
      <Text
        style={[
          styles.buttonText,
          { fontSize: horizontalScale(20), marginBottom: "5%" },
        ]}
      >
        Select Difficulty
      </Text>

      {gameModes.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => onSelectDifficulty(item.id)}
          style={[styles.button, styles.shadowStyle]}
        >
          <Text style={styles.buttonText}>{item.mode?.toUpperCase()}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    width: "100%",
    height: "80%",
    backgroundColor: "lightgray",
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
    elevation: 10,
  },
  buttonText: {
    color: "#000",
    fontSize: horizontalScale(35),
    fontWeight: "bold",
    textAlign: "center",
  },
});
