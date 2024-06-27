import React from "react";
import TitleHeader from "./TitleHeader";
import { ImageBackground, StyleSheet } from "react-native";

const TitleHeaderHOC = <P extends {}>(Component: React.ComponentType<P>) => {
  const WrappedComponent: React.FC<P> = (props) => {
    return (
      <ImageBackground
        source={require("../../assets/mem-bg.png")}
        style={styles.parentContainer}
      >
        <TitleHeader />
        <Component {...props} />
      </ImageBackground>
    );
  };

  return WrappedComponent;
};

const styles = StyleSheet.create({
  parentContainer: {
    width: "100%",
    height: "100%",
  },
});

export default TitleHeaderHOC;
