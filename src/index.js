import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import ScoreContainer from "./components/ScoreContainer";
import Footer from "./components/Footer";
import Landing from "./components/Landing.js";

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
    window.scrollTo(0, 0);  //scroll to top of page
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.onLanding && <Landing changeState={this.changeState} />}
        {!this.state.onLanding && <ScoreContainer />}
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
