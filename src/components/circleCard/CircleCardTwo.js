import React from "react";
import "./CircleCardTwo.css";

const CircleCardTwo = (props) => {
  const changeToFaceHandler = () => {
    //calls the event and sets the flag to 1 to change the page to ImageInput
    props.onClickBtnTwo(1);
  };
  return (
    <div className="card">
      <div className="box">
        <img
          src="https://i.postimg.cc/MHbFB2g2/face.png"
          className="logo"
        ></img>
      </div>
      <div className="content">
        <h2>Face Detection</h2>
        <p>
          Insert Any Image And get How Many Faces Are There In The Image! Try It
          Now !
        </p>
        <button onClick={changeToFaceHandler}>Try Now</button>
      </div>
    </div>
  );
};

export default CircleCardTwo;
