import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import ScoreContainer from "./ScoreContainer";

function App() {
  return (
    <div>
      <Header />
      <ScoreContainer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
