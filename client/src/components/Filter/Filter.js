// React and PropTypes must be imported, though they are not used implicitly
// eslint-disable-next-line no-unused-vars,react/no-deprecated
import React, { PropTypes, Component } from "react";
import "./Filter.css";

export default class Filter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-filter-leo">
        <h5 className="filter-header">Size: </h5>
        <input type="text"
          placeholder="Enter size..."
          className="filter-input"
          onChange={(event) => this.props.handler(event)}
        />
      </div>
    )
  }
}
