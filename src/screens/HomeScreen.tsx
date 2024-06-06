import { StyleSheet, Text, View } from "react-native";
import MemoryGameMain from "../components/game/MemoryGameMain";
import TitleHeader from "../components/TitleHeader";

export default function HomeScreen() {
  return (
    <>
      <TitleHeader />
      <MemoryGameMain />
    </>
  );
}
