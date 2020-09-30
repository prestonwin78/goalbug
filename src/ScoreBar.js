import React from "react";
import "./styles/scorebar.css";
import "./styles/settings.css";
import { Spring } from "react-spring/renderprops";

function ScoreBar(props) {
  const backgroundColorClass = "bar-section-container " + props.backgroundColor;
  const barColorClass = "percent-bar " + props.barColor;
  let completionPercent = 0;
  if (props.valid === "true") {
    completionPercent =
      ((props.score - props.start) / (props.goal - props.start)) * 100;
  }

  return (
    <div className={backgroundColorClass}>
      <h3 id="score-text">
        {props.scoreText} {props.score}
      </h3>

      <div className="start">
        <h3>{props.start}</h3>
      </div>

      <div className="bar-container">
        {/* Animation for sliding percent bar */}
        <Spring
          to={{ width: completionPercent + "%" }}
          config={{ duration: 1000 }}
        >
          {(props) => <div style={props} className={barColorClass}></div>}
        </Spring>
      </div>

      <div className="goal">
        <h3>{props.goal}</h3>
      </div>
    </div>
  );
}

export default ScoreBar;
