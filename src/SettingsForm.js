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
      backgroundColor: "navy-op",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (
      event.target.name === "backgroundColor" ||
      event.target.name === "barColor"
    ) {
      this.props.setSetting(event.target.name, event.target.value);
    } else {
      const regex = RegExp("-?[0-9]+");
      if (regex.test(event.target.value)) {
        console.log("yep");
        this.props.setSetting(event.target.name, event.target.value);
      }
    }
  }

  render() {
    return (
      <div className="settings-container">
        <div className="block">
          <h1>Settings</h1>
        </div>

        <div className="block">
          <label>Goal</label>
          <input type="text" name="goal" onChange={this.handleChange} />
        </div>

        <div className="block">
          <label>Starting Value</label>
          <input type="text" name="start" onChange={this.handleChange} />
        </div>

        <div className="block">
          <label>Add in increments of</label>
          <input
            type="text"
            name="addIncrements"
            onChange={this.handleChange}
          />
        </div>

        <div className="block">
          <label>Subtract in decrements of</label>
          <input
            type="text"
            name="subDecrements"
            onChange={this.handleChange}
          />
        </div>

        <div className="block">
          <label>Background Color</label>
          <select
            className="background-select"
            name="backgroundColor"
            onChange={this.handleChange}
          >
            <option className="navy" value="navy"></option>
            <option className="blue" value="blue"></option>
            <option className="red" value="red"></option>
            <option className="yellow" value="yellow"></option>
            <option className="green" value="green"></option>
            <option className="purple" value="purple"></option>
            <option className="orange" value="orange"></option>
            <option className="none" value="none"></option>
          </select>
        </div>

        <div className="block">
          <label>Bar Color</label>
          <select
            className="bar-color-select"
            name="barColor"
            onChange={this.handleChange}
          >
            <option className="navy" value="navy"></option>
            <option className="blue" value="blue"></option>
            <option className="red" value="red"></option>
            <option className="yellow" value="yellow"></option>
            <option className="green" value="green"></option>
            <option className="purple" value="purple"></option>
            <option className="orange" value="orange"></option>
            <option className="none" value="none"></option>
          </select>
        </div>
      </div>
    );
  }
}

export default SettingsForm;
