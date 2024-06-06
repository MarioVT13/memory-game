import React from "react";
import TitleHeader from "./TitleHeader";

const TitleHeaderHOC = <P extends {}>(Component: React.ComponentType<P>) => {
  const WrappedComponent: React.FC<P> = (props) => {
    return (
      <>
        <TitleHeader />
        <Component {...props} />
      </>
    );
  };

  return WrappedComponent;
};

export default TitleHeaderHOC;
