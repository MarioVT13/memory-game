import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text } from "react-native";
import { horizontalScale } from "../../../utils/ScalingUtil";

export default function VictoryMessage({ time }: { time: string }) {
  const flipAnim = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    startFlipAnimation();
  }, []);

  const startFlipAnimation = () =>
    Animated.spring(flipAnim, {
      toValue: 1,
      useNativeDriver: true,
      friction: 2,
    }).start();

  return (
    <Animated.View
      style={[styles.parentContainer, { transform: [{ scaleX: flipAnim }] }]}
    >
      <Text style={styles.title}>You Win!</Text>
      <Text style={styles.time}>Time: {time}</Text>
    </Animated.View>
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
  time: {
    fontSize: horizontalScale(20),
    marginTop: "10%",
    textAlign: "center",
  },
});
