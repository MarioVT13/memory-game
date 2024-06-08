import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { verticalScale } from "../../../utils/ScalingUtil";
import { ExtendedCardDataType } from "./Data";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";

interface CardType {
  item: ExtendedCardDataType;
  index: number;
  numColumns: number;
  onPress: () => void;
  isFlipped: boolean;
}

export default function Card({
  item,
  index,
  numColumns,
  onPress,
  isFlipped,
}: CardType) {
  // Remove marginRight on the last item in each row
  const marginRight =
    index % numColumns === numColumns - 1 ? 0 : verticalScale(10);

  // algorithm for calculating image size dynamically
  const imageSize = 180 / numColumns + (numColumns - 2) * 10;

  const dynamicStyles = {
    width: verticalScale(imageSize),
    height: verticalScale(imageSize),
    marginBottom: verticalScale(10),
    marginRight: marginRight,
    borderColor: isFlipped ? "skyblue" : "#000",
  };

  if (isFlipped) {
    return (
      <Image
        key={item?.uniqueKey}
        source={item.image}
        style={[styles.card, dynamicStyles]}
      />
    );
  } else {
    return (
      <TouchableOpacity
        onPress={onPress}
        key={item?.uniqueKey}
        style={[styles.card, dynamicStyles]}
      >
        <Icon
          name={"help"}
          size={verticalScale(imageSize / 2)}
          color={"#000"}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
});
