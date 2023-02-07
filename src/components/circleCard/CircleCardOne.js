import React from "react";
import "./CircleCardOne.css";

const CircleCardOne = (props) => {
  const changeWindowHandler = () => {
    //calls the event and sets the flag to 0 to change the page to FormData
    props.onClickBtnOne(0);
  };
  return (
    <div className="card">
      <div className="box">
        <img
          src="https://i.postimg.cc/zGd4pNvq/script.png"
          className="logo"
        ></img>
      </div>
      <div className="content">
        <h2>Text Analysis</h2>
        <p>
          Analyse the text and see how Toxic, Insulting and Threatning it is!
          Try Now!
        </p>
        <button onClick={changeWindowHandler}>Try Now</button>
      </div>
    </div>
  );
};

export default CircleCardOne;
