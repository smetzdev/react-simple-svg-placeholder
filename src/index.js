import React, { Component } from "react";
import SimpleSvgPlaceholder from "@cloudfour/simple-svg-placeholder";

export default class ExampleComponent extends Component {
  static defaultProps = {
    width: 300,
    height: 150,
    bgColor: "#aaa",
    textColor: "#333"
  };

  srcString = SimpleSvgPlaceholder({ ...this.props });

  render() {
    return <img src={this.srcString} alt={"Placeholder"} />;
  }
}
