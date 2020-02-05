import PropTypes from "prop-types";
import React, { Component } from "react";
import SimpleSvgPlaceholder from "@cloudfour/simple-svg-placeholder";

export default class ReactSimpleSVGPlaceholder extends Component {
  static defaultProps = {
    width: 300,
    height: 150,
    bgColor: "#aaa",
    textColor: "#333"
  };

  srcString = SimpleSvgPlaceholder({ ...this.props });

  render() {
    return this.props.returnAsString ? (
      this.srcString
    ) : (
      <img src={this.srcString} alt={"Placeholder"} />
    );
  }
}

// PropTypes
ReactSimpleSVGPlaceholder.propTypes = {
  returnAsString: PropTypes.bool
};
