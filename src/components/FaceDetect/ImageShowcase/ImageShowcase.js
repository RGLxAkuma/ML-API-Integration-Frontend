import React from "react";
import "./ImageShowcase.css";

const ImageShowcase = (props) => {

    const GoToHomeHandler = ()=>{ //Function called when cliked on Home to go back to Home Page
        props.onGoHome();
    }

    //name , faceCount is the data given by ImageInput page and we are accesing them using props
  return (
    <div className="showcase">
      <div className="showcase_main">
        <div className="img_size">
          <img src={props.name}></img>
        </div>
        <p className="text_ot">There are {props.faceCount} faces in the image</p>
      </div> 
      <button onClick={GoToHomeHandler} className="home_go">HOME</button>
    </div>
  );
};

export default ImageShowcase;
