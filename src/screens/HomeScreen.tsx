import TitleHeaderHOC from "../components/TitleHeaderHOC";
import MemoryGameMain from "../components/game/MemoryGameMain";

const HomeScreen = () => {
  return <MemoryGameMain />;
};

export default TitleHeaderHOC(HomeScreen);
// TitleHeaderHOC is a Higher Order Component (HOC).
// It can be easily reused for other screens, adding the title to them too.
