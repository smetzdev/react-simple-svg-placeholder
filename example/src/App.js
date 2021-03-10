import React, { Component } from "react";
import SVGPlaceholder, { getImgSrc } from "react-simple-svg-placeholder";

const testProps = {
  width: 150,
  height: 50,
  bgColor: "red"
};

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Default</h2>
        <SVGPlaceholder />
        <h2>Return as String</h2>
        <SVGPlaceholder returnAsString />
        <h2>With Props</h2>
        <SVGPlaceholder {...testProps} />
        <h2>GetIMGSRC</h2>
        {getImgSrc(testProps)}
      </div>
    );
  }
}
