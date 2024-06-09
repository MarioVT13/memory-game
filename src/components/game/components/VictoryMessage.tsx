import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { horizontalScale } from "../../../utils/ScalingUtil";

export default function VictoryMessage() {
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.title}>You Win!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    marginTop: "10%",
    fontSize: horizontalScale(27),
    fontWeight: "bold",
    textAlign: "center",
  },
});
