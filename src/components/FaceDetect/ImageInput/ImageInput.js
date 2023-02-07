import React, { useState } from "react";
import ImageShowcase from "../ImageShowcase/ImageShowcase";
import "./ImageInput.css";

const Imageinput = (props) => {
  const [facesNumber, setFacesNumber] = useState(-1); // this variable is used to store the number of faces when the server responds
  const [isPending, setIsPending] = useState(false); // This variable is used to change the button text to "Analyzing..." until the server sends the response
  const [up_img, setUp_img] = useState(""); // This variable is used to store the bAse64 data of the input image

  const changeWindowToFace = () => {
    // this function is called when "Submit" button is clicked

    const data = {
      img_bs64: `${up_img}`, // creating JSON objext for the request to server
    };

    setIsPending(true); // set to true so the button changes to "Analyzing..."

    fetch(`https://ml-api-integration-app-api.onrender.com/img_analysis`, {
      //POST request to server API endpoint corresponding to Face Detection
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        setIsPending(false); // setting the variable flase so button chnages back to submit
        setFacesNumber(data.Faces); //variable is updated with number of faces in image
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const fileUploadHandler = (event) => {
    //this function is to get the local input image from the client
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      setUp_img(event.target.result); //varaible is set with base64 dataof the locally uploaded image from client
    };

    reader.readAsDataURL(file);
  };

  const ChangeWindowHandler = () => {
    //when clicked on Home button the page re-render and goes back to Home Page
    props.onFaceToHome();
  };

  if (facesNumber !== -1) {
    //contion to switch the page from ImageInput to ImageShowcase
    return (
      <ImageShowcase //corresponding data is sent to ImageShowcase page
        name={up_img}
        faceCount={facesNumber}
        onGoHome={ChangeWindowHandler}
      ></ImageShowcase>
    );
  }

  return (
    <div className="img_inp">
      <div>
        <input type="file" onChange={fileUploadHandler}></input>
      </div>
      <div>
        {!isPending && (
          <button onClick={changeWindowToFace} className="img_analyze">
            SUBMIT
          </button>
        )}
        {isPending && (
          <button disabled className="img_analyze">
            ANALYZING...
          </button>
        )}
        <button onClick={ChangeWindowHandler}>HOME</button>
      </div>
    </div>
  );
};

export default Imageinput;
