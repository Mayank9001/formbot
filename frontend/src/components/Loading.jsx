import React from "react";
import { FallingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <FallingLines
    color="#29669e"
    width="100"
    visible={true}
    ariaLabel="falling-circles-loading"
    />
  )
};

export default Loading;