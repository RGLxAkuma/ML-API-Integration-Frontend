import React from "react";
import Bar from "./Bar";

const BarOne = (props) => {
  return (
    <Bar progress={props.toxic}></Bar> //this is progress bar corresponding to toxicity, sends probability corresponding to toxicity and the bar will update with that width
  );
};

export default BarOne;
