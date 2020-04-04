# react-simple-svg-placeholder

> Simple React component for simple SVG placeholder images based on the awesome [Cloudfour Simple SVG Placeholder](https://cloudfour.com/thinks/simple-svg-placeholder/)

[![NPM](https://img.shields.io/npm/v/react-simple-svg-placeholder.svg)](https://www.npmjs.com/package/react-simple-svg-placeholder) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-simple-svg-placeholder
```

```bash
yarn add react-simple-svg-placeholder
```

## Usage

### Default

```jsx
import React from "react";

import PlaceholderImage from "react-simple-svg-placeholder";

const Example = () => <PlaceholderImage width={300} height={150} />;
```

### With an Object

```jsx
import React from "react";

import PlaceholderImage from "react-simple-svg-placeholder";

const Example = () => {
  const placeholderSettings = {
    width: 300,
    height: 150,
    bgColor: "#aaa",
    textColor: "#333",
  };

  return <PlaceholderImage {...placeholderSettings} />;
};
```

## Prop Reference

### width `{Number}`

Defaults to `300`, the default width of SVG elements in most browsers.

### height `{Number}`

Defaults to `150`, the default height of SVG elements in most browsers.

### returnAsString `{Boolean}`

Defaults to `false`, toggles if the component only returns the source-string or an actual `<img>`  
**Please also watch the "getImgSrc Function"-section below**

### text `{String}`

The text to display. Defaults to the image dimensions.

### fontFamily `{String}`

The font to use for the text. For data URIs, this needs to be a system-installed font. Defaults to `'sans-serif'`.

### fontWeight `{String}`

Defaults to `'bold'`.

### fontSize `{Number}`

Defaults to 20% of the shortest image dimension, rounded down.

### bgColor `{String}`

The background color of the image. Defaults to `#ddd`.

### textColor `{String}`

The color of the text. For transparency, use an `rgba` or `hsla` color value. Defaults to `rgba(0,0,0,0.5)`.

### charset `{String}`

Defaults to `UTF-8`, but if your source HTML document's character set is different, you may want to update this to match.

## getImgSrc Function

If you only want to generate an image-src you don't need to use a react-component.  
You can use the getImgSrc-function of this project.  
The defaults and props-usage is the same as in the react-component.

```js
import { getImgSrc } from "react-simple-svg-placeholder";

const imgSrcWithDefaults = getImgSrc();
const imgSrcWithWidth = getImgSrc({ width: 800 });
```

## License

MIT © [r3sMetz](https://github.com/r3sMetz)
