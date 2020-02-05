import React, { Component } from "react";

import SVGPlaceholder from "react-simple-svg-placeholder";

export default class App extends Component {
  render() {
    return (
      <div>
        <SVGPlaceholder />
        <br />
        <SVGPlaceholder returnAsString />
      </div>
    );
  }
}
