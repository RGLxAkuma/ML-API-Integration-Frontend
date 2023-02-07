import React from "react";
import "./FaceDetect.css";
import Imageinput from "./ImageInput/ImageInput";

const FaceDetect = (props) => {
  const changeFaceToHomeHandler = () => {
    // calling onTouch event when Home button is cliked in ImageInput
    props.onTouch(-1);
  };
  return (
    <div>
      <Imageinput onFaceToHome={changeFaceToHomeHandler}></Imageinput>
    </div>
  );
};

export default FaceDetect;
