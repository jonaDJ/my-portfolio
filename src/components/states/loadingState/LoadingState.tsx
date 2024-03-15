import React from "react";
import "./LoadingState.css";

type Props = {};

const LoadingState = (props: Props) => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};

export default LoadingState;
