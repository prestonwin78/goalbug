import React from "react";
import "./scorebar.css";

function animateBar(fromWidth, toWidth) {
  /*
  $.keyframe.define([
    {
      name: "animate-bar",
      "0%": { width: "0%" },
      "100%": { width: "" + toWidth + "%" },
    },
  ]);
  $(".percent-bar").playKeyframe({
    name: "animate-bar",
    duration: "1s",
    timingFunction: "linear",
  });
  */
}

function ScoreBar(props) {
  animateBar(0, props.score);
  return (
    <div className="bar-section-container">
      <h3 id="score-text">Score: {props.score}</h3>
      <div className="bar-container">
        <div
          className="percent-bar"
          style={{
            width: "" + props.score + "%",
          }}
        ></div>
      </div>
    </div>
  );
}

export default ScoreBar;
