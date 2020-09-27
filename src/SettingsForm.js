import React from "react";
import "./styles/settings.css";

class SettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: 0,
      start: 100,
      addIncrements: 10,
      subDecrements: 10,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.setSetting(event.target.name, event.target.value);
  }

  render() {
    return (
      <div className="settings-container">
        <div className="block">
          <h1>Settings</h1>
        </div>

        <div className="block">
          <label>Goal:</label>
          <input type="text" name="goal" onChange={this.handleChange} />
        </div>

        <div className="block">
          <label>Starting Value:</label>
          <input type="text" name="start" onChange={this.handleChange} />
        </div>

        <div className="block">
          <label>Add in increments of:</label>
          <input
            type="text"
            name="addIncrements"
            onChange={this.handleChange}
          />
        </div>

        <div className="block">
          <label>Subtract in decrements of:</label>
          <input
            type="text"
            name="subDecrements"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default SettingsForm;
