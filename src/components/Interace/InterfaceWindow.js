import React, { useState } from "react";
import CircleCardOne from "../circleCard/CircleCardOne";
import FormData from "../TextRecog/FormData";
import CircleCardTwo from "../circleCard/CircleCardTwo";
import "./InterfaceWindow.css";
import FaceDetect from "../FaceDetect/FaceDetect";

const InterfaceWindow = () => {
  const [flag, setFlag] = useState(() => {
    // this variable takes care of the conditions of when to show what content
    return -1;
  });

  const windowChangeHandlerOne = (data) => {
    //When clicked on Try Now button in text recognition this function will call and set the flag to 0 and page will re-render
    setFlag(data);
  };

  const windowChangeHandlerTwo = (data) => {
    //When clicked on Try Now button in Face detection this function will call and set the flag to 1 and page will re-render
    setFlag(data);
  };

  const windowToHomeHandler = (val) => {
    // this fuction will set the flag to -1 and the whole page will go back to home page
    setFlag(val);
  };
  if (flag === 1) {
    return <FaceDetect onTouch={windowToHomeHandler}></FaceDetect>;
  }

  if (flag === 0) {
    return <FormData onTouch={windowToHomeHandler}></FormData>;
  }

  return (
    <div className="main">
      <div className="title_top">
        <h2 className="title">Lorem Ipsum</h2>
      </div>
      <CircleCardOne onClickBtnOne={windowChangeHandlerOne}></CircleCardOne>
      <CircleCardTwo onClickBtnTwo={windowChangeHandlerTwo}></CircleCardTwo>
    </div>
  );
};

export default InterfaceWindow;
