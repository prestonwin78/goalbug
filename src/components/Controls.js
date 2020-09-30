import React from "react";
import "../styles/controlStyles.css";

function Controls(props) {
  return (
    <div className="controls-container">
      <div className="plus" onClick={props.increment}>
        <img
          className="plus-img"
          src={require("../Icons/plus.svg")}
          alt="plus"
        ></img>
      </div>
      <div className="minus" onClick={props.decrement}>
        <img
          className="minus-img"
          src={require("../Icons/minus.svg")}
          alt="minus"
        ></img>
      </div>
      <div style={{ clear: "both" }}></div>
    </div>
  );
}

export default Controls;
