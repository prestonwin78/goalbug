import React from "react";
import "./styles/landing.css";

function Landing(props) {
  return (
    <div className="body">
      <div className="card">
        <h1 className="landing-header">Scorebar - Designed for Twitch/OBS</h1>
        <p className="landing-paragraph">
          With Scorebar, you can design a custom, modern scorebar to suit your
          needs and improve your stream.
        </p>
      </div>
      <div className="image-container">
        <img
          src={require("./Images/example.PNG")}
          alt="example scorebar"
          className="scorebar-example"
        ></img>
      </div>
      <div className="button-container">
        <button id="get-started" onClick={props.changeState}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Landing;
