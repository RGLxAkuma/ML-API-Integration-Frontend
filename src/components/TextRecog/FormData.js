import React, { useEffect, useState } from "react";
import "./FormData.css";
import BarOne from "./BarOne";
import BarTwo from "./BarTwo";
import BarThree from "./BarThree";

const FormData = (props) => {
  const [sentence, setSentence] = useState(""); //this variable will have the inputed text from client. everytime client types a letter the variable gets updated
  const [tox, setTox] = useState(0); // this variable will store the probability value corresponding to toxicity that will be sent by server.
  const [ins, setIns] = useState(0); // this variable will store the probability value corresponding to Insult that will be sent by server.
  const [trt, setTrt] = useState(0); // this variable will store the probability value corresponding to Threat that will be sent by server.

  const changeTextHandler = (event) => {
    //this function constanly updating the variable sentence
    setSentence(event.target.value);
  };

  const backToHomeHandler = () => {
    //this fucntion will call the onTouch event via props and set the flag to -1 so we will go back to home page
    props.onTouch(-1);
  };

  const analyzeTextHandler = (e) => {
    //when analyse button is clicked the POST request to the server API endpoint happens with appropriate response
    e.preventDefault();

    const data = {
      statement: `${sentence}`,
    };

    fetch(`https://ml-api-integration-app-api.onrender.com/text_analysis`, {
      // API endpoint for text analysis of server
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
        if (data.error.length !== 0) {
          //this handles the error when unsupported language is inputed
          alert("The language is not supported , use English language only");
          return;
        }
        // setting the probability value coreesponding to parameters
        setTox(data.TOXICITY);
        setIns(data.INSULT);
        setTrt(data.THREAT);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="main">
      <div className="inp_box">
        <div className="form">
          <textarea
            onChange={changeTextHandler}
            placeholder="Enter The Text Here"
          ></textarea>
          <div className="btn_grp">
            <button onClick={analyzeTextHandler} className="analyze_btn">
              Analyze
            </button>
            <button onClick={backToHomeHandler}>Home</button>
          </div>
        </div>
        <div className="result_box">
          <div className="box box1">
            <p>TOXICITY</p>
            <BarOne toxic={tox}></BarOne>
          </div>
          <div className="box box2">
            <p>INSULT</p>
            <BarTwo insult={ins}></BarTwo>
          </div>
          <div className="box box3">
            <p>THREAT</p>
            <BarThree threat={trt}></BarThree>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormData;
