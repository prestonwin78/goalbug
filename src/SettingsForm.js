import React from "react";
import "./styles/settings.css";

class SettingsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      goal: 0,
      start: 100,
      addIncrements: 10,
      subDecrements: 10,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="settings-container">
        <label>
          Goal:
          <input type="text" name="goal" onChange={this.handleChange} />
        </label>
        <label>
          Starting Value:
          <input type="text" name="start" onChange={this.handleChange} />
        </label>
        <label>
          Add in increments of:
          <input
            type="text"
            name="addIncrements"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Subtract in decrements of:
          <input
            type="text"
            name="subDecrements"
            onChange={this.handleChange}
          />
        </label>

        <h1>goal: {this.state.goal}</h1>
        <h1>start: {this.state.start}</h1>
        <h1>add: {this.state.addIncrements}</h1>
        <h1>sub: {this.state.subDecrements}</h1>
      </div>
    );
  }
}

export default SettingsForm;
