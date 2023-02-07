import React from "react";
import Bar from "./Bar";

const BarThree = (props)=>{
    return(
        <Bar progress={props.threat}></Bar> //this is progress bar corresponding to Threat, sends probability corresponding to Threat and the bar will update with that width
    );
}


export default BarThree;