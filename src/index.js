import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import ScoreContainer from "./ScoreContainer";
import Landing from "./Landing.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      onLanding: true,
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    this.setState({
      onLanding: false,
    });
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.onLanding && <Landing changeState={this.changeState} />}
        {!this.state.onLanding && <ScoreContainer />}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
