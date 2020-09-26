import React from "react";
import Controls from "./Controls";
import ScoreBar from "./ScoreBar";

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
      if (--newScore <= 0) {
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
        <Controls
          increment={this.incrementScore}
          decrement={this.decrementScore}
        />
        <ScoreBar score={this.state.score} />
      </div>
    );
  }
}

export default ScoreContainer;
