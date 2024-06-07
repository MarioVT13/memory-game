import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { verticalScale } from "../../../utils/ScalingUtil";
import { CardDataType } from "./Data";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";

type CardType = {
  item: CardDataType;
  index: number;
  numColumns: number;
};

export default function Card({ item, index, numColumns }: CardType) {
  const [showImage, setShowImage] = useState<boolean>(false);

  // Remove marginRight on the last item in each row
  const marginRight =
    index % numColumns === numColumns - 1 ? 0 : verticalScale(10);

  // algorithm for calculating image size dynamically
  const dynamicImageSize = 180 / numColumns + (numColumns - 2) * 10;

  const dynamicStyles = {
    width: verticalScale(dynamicImageSize),
    height: verticalScale(dynamicImageSize),
    marginBottom: verticalScale(10),
    marginRight: marginRight,
    borderColor: showImage ? "skyblue" : "#000",
  };

  if (showImage) {
    return (
      <Image
        key={`${item.id}_${index}`}
        source={item.image}
        style={[styles.card, dynamicStyles]}
      />
    );
  }

  return (
    <TouchableOpacity
      key={`${item.id}_${index}`}
      style={[styles.card, dynamicStyles]}
    >
      <Icon
        name={"help"}
        size={verticalScale(dynamicImageSize / 2)}
        color={"#000"}
      />
    </TouchableOpacity>
  );
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
