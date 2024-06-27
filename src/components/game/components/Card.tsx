import { useCallback, useEffect, useMemo, useRef } from "react";
import { Animated, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { verticalScale } from "../../../utils/ScalingUtil";
import { ExtendedCardDataType } from "./Data";

interface CardType {
  item: ExtendedCardDataType;
  index: number;
  numColumns: number;
  onPress: () => void;
  isFlipped: boolean;
  isVisible: boolean;
}

export default function Card({
  item,
  index,
  numColumns,
  onPress,
  isFlipped,
  isVisible,
}: CardType) {
  // Initialize animated value
  const flipAnim = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    flipAnim.setValue(0.5); // Reset the animation value, to reuse animation
    startFlipAnimation();
  }, [isFlipped]);

  const startFlipAnimation = useCallback(() => {
    Animated.spring(flipAnim, {
      toValue: 1,
      useNativeDriver: true, // Use native drivers for performance benefit
      friction: isFlipped ? 5 : 3, // Control the "bounce" effect speed,
    }).start();
  }, [isFlipped, flipAnim]);

  // Algorithm for calculating image size dynamically
  const imageSize = 180 / numColumns + (numColumns - 2) * 10;
  // Remove marginRight on the last item in each row
  const marginRight =
    index % numColumns === numColumns - 1 ? 0 : verticalScale(10);

  const dynamicCardStyles = useMemo(
    () => ({
      width: verticalScale(imageSize),
      height: verticalScale(imageSize),
      marginBottom: verticalScale(10),
      marginRight: marginRight,
      borderColor: isFlipped ? "blue" : "#000",
      opacity: isVisible ? 1 : 0,
      borderRadius: 25 - (numColumns - 2) * 5,
    }),
    [imageSize, marginRight, isFlipped, isVisible, numColumns]
  );

  if (isFlipped) {
    return (
      <Animated.Image
        key={item?.uniqueKey}
        source={item.image}
        style={[
          styles.card,
          dynamicCardStyles,
          { transform: [{ scaleX: flipAnim }] },
        ]}
      />
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      key={item?.uniqueKey}
      style={[styles.card, dynamicCardStyles]}
    >
      <Animated.View style={{ transform: [{ scaleY: flipAnim }] }}>
        <Icon
          name={"help"}
          size={verticalScale(imageSize / 2)}
          color={"#000"}
        />
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
