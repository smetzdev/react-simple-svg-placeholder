/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-quotes */
/* eslint-disable semi */
/* eslint-disable quotes */
import React, { Component } from "react";
import PropTypes from "prop-types";
import SimpleSvgPlaceholder from "@cloudfour/simple-svg-placeholder";

export default class ExampleComponent extends Component {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
  };

  static defaultProps = {
    width: 300,
    height: 150,
    bgColor: "#aaa",
    textColor: "#333"
  };

  srcString = SimpleSvgPlaceholder({ ...this.props });

  render() {
    return <img src={this.srcString} alt="Placeholder" />;
  }
}
