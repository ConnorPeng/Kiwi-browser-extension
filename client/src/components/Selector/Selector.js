import React, { PropTypes, Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./Selector.css";

export default class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  handleChecking() {
    this.setState({ checked: !this.state.checked });
    const operation = this.state.checked? -1 : 1;
    this.props.handler(this.props.brand, operation);
  }

  render() {
    const checkboxId = "selector-id-" + this.props.brand + "-" + this.props.idNum;
    return (
      <div>
        <label className="selector-item">
          <div className="selector-text">{this.props.brand}</div>
          <input
            type="checkbox"
            onChange={() => this.handleChecking()}
            className="selector-checkbox"
            id={checkboxId}
          />
          <span className="selector-square"></span>
        </label>
      </div>
    )
  }
}
