import React from "react";
import "./WrapperComponent.scss";
const WrapperComponent: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return <div className="wrapper">{children}</div>;
};

export default WrapperComponent;
