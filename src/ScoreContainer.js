import React from "react";
import Controls from "./Controls";
import ScoreBar from "./ScoreBar";
import SettingsForm from "./SettingsForm";

class ScoreContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      goal: 100,
      start: 0,
      addIncrements: 10,
      subDecrements: 10,
      backgroundColor: "navy",
      barColor: "green",
      valid: "true",
    };
    this.incrementScore = this.incrementScore.bind(this);
    this.decrementScore = this.decrementScore.bind(this);
    this.setSetting = this.setSetting.bind(this);
  }

  incrementScore() {
    this.setState((prevState) => {
      let newScore = prevState.score;
      newScore += prevState.addIncrements;
      if (newScore >= prevState.goal) {
        newScore = prevState.goal;
      }
      return {
        score: newScore,
      };
    });
  }

  decrementScore() {
    this.setState((prevState) => {
      let newScore = prevState.score;
      newScore -= prevState.subDecrements;
      if (newScore <= prevState.start) {
        newScore = prevState.start;
      }
      return {
        score: newScore,
      };
    });
  }

  /* this method is passed to the settings form
     and called on state change in the form */
  setSetting(key, value) {
    let isValid = "true";
    if (key === "backgroundColor" || key === "barColor") {
      this.setState({
        [key]: value,
      });
    } else {
      if (key === "start") {
        const newStart = parseInt(value, 10);
        if (this.state.goal <= newStart) {
          isValid = "false";
        }
        this.setState({
          start: newStart,
          score: newStart,
          valid: isValid,
        });
      } else if (key === "goal") {
        const newGoal = parseInt(value, 10);
        if (newGoal <= this.state.start) {
          isValid = "false";
        }
        this.setState({
          [key]: parseInt(value, 10),
          valid: isValid,
        });
      } else {
        this.setState({
          [key]: parseInt(value, 10),
        });
      }
    }
  }

  render() {
    return (
      <div className="body">
        <div style={{ height: "3rem" }}></div>
        <SettingsForm setSetting={this.setSetting} />
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
        <ScoreBar
          score={this.state.score}
          goal={this.state.goal}
          start={this.state.start}
          addIncrements={this.state.addIncrements}
          subDecrements={this.state.subDecrements}
          backgroundColor={this.state.backgroundColor}
          barColor={this.state.barColor}
          valid={this.state.valid}
        />
        <Controls
          increment={this.incrementScore}
          decrement={this.decrementScore}
        />

        {/* for testing output only */}
        <div style={{ display: "none" }}>
          <h1>goal: {this.state.goal}</h1>
          <h1>start: {this.state.start}</h1>
          <h1>add: {this.state.addIncrements}</h1>
          <h1>sub: {this.state.subDecrements}</h1>
          <h1>bg: {this.state.backgroundColor}</h1>
          <h1>bar: {this.state.barColor}</h1>
          <h1>isValid: {this.state.valid}</h1>
        </div>
      </div>
    );
  }
}

export default ScoreContainer;
