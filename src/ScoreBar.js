import React from "react";
import "./styles/scorebar.css";
import "./styles/settings.css";

function ScoreBar(props) {
  const completionPercent =
    ((props.score - props.start) / (props.goal - props.start)) * 100;
  const backgroundColorClass = "bar-section-container " + props.backgroundColor;
  const barColorClass = "percent-bar " + props.barColor;
  return (
    <div className={backgroundColorClass}>
      <h3 id="score-text">Score: {props.score}</h3>
      <div className="bar-container">
        <div
          className={barColorClass}
          style={{
            width: "" + completionPercent + "%",
          }}
        ></div>
      </div>
    </div>
  );
}

export default ScoreBar;
