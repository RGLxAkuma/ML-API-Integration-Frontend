import React from "react";
import Bar from "./Bar";

const BarTwo = (props) => {
  return (
    <Bar progress={props.insult}></Bar> //this is progress bar corresponding to Insult, sends probability corresponding to Insult and the bar will update with that width
  );
};

export default BarTwo;
