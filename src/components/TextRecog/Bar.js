import React from "react";
import "./Bar.css";

const Bar = (props) => {
  const num = props.progress * 100; // num is value according to the value gotten from the FormData and indiviual Bars
  const num1 = props.progress * 200; // multiplied by 200 as the width of bar is 200px
  //toFized is used to set the decimal precision to 2 decimals
  return (
    <div className="prg_bar">
      <div className="progress">
        <div className="progressing" style={{ width: num1 }}></div>
      </div>
      <div className="progress_value">{num.toFixed(2)}%</div>
    </div>
  );
};

export default Bar;
