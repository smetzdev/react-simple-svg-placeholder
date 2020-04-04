import PropTypes from "prop-types";
import React, { Component } from "react";
import SimpleSvgPlaceholder from "@cloudfour/simple-svg-placeholder";

const SSP_defaults = {
  width: 300,
  height: 150,
  bgColor: "#aaa",
  textColor: "#333",
};

export const getImgSrc = (props = {}) =>
  SimpleSvgPlaceholder({ ...SSP_defaults, ...props });

export default class ReactSimpleSVGPlaceholder extends Component {
  srcString = getImgSrc();

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
  returnAsString: PropTypes.bool,
};
