import React from "react";
import Controls from "./Controls";
import ScoreBar from "./ScoreBar";
import SettingsForm from "./SettingsForm";

class ScoreContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
    };
    this.incrementScore = this.incrementScore.bind(this);
    this.decrementScore = this.decrementScore.bind(this);
  }

  incrementScore() {
    this.setState((prevState) => {
      let newScore = prevState.score;
      newScore += 10;
      if (newScore >= 100) {
        newScore = 100;
      }
      return {
        score: newScore,
      };
    });
  }

  decrementScore() {
    this.setState((prevState) => {
      let newScore = prevState.score;
      newScore -= 10;
      if (newScore <= 0) {
        newScore = 0;
      }
      return {
        score: newScore,
      };
    });
  }

  render() {
    return (
      <div>
        <SettingsForm />
        <h2
          style={{
            color: "lightgray",
            textAlign: "center",
            marginBottom: "1.5rem",
            marginTop: "3rem",
          }}
        >
          Your Scorebar:
        </h2>
        <ScoreBar score={this.state.score} />
        <Controls
          increment={this.incrementScore}
          decrement={this.decrementScore}
        />
      </div>
    );
  }
}

export default ScoreContainer;
