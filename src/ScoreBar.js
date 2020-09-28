import React from "react";
import "./styles/scorebar.css";
import "./styles/settings.css";

function ScoreBar(props) {
  const completionPercent =
    ((props.score - props.start) / (props.goal - props.start)) * 100;
  const colorClass = "bar-section-container " + props.backgroundColor;
  return (
    <div className={colorClass}>
      <h3 id="score-text">Score: {props.score}</h3>
      <div className="bar-container">
        <div
          className="percent-bar"
          style={{
            width: "" + completionPercent + "%",
          }}
        ></div>
      </div>
    </div>
  );
}

export default ScoreBar;
