import React from "react";
import "./styles/landing.css";

function Landing(props) {
  return (
    <div className="body">
      <div className="card">
        <h1 className="landing-header">Goalbug</h1>
        <div className="info-container">
          <h2>Modern Scoreboard for Streams</h2>
          <p>
            With Goalbug, you can design a custom, modern scorebar to fit your
            needs and improve your stream.
          </p>
          <ul>
            <li>Customize a scoreboard's color and text</li>
            <li>
              Choose how the scoreboard behaves when adding and subtracting
              points
            </li>
            <li>Easy to use</li>
            <li>Works well with OBS</li>
          </ul>
        </div>
      </div>
      <div className="image-container">
        <img
          src={require("./Images/example.PNG")}
          alt="example scorebar"
          className="scorebar-example"
        ></img>
      </div>
      <div className="image-container">
        <img
          src={require("./Images/settings.png")}
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
