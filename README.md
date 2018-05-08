# @spscommerce/ui-react

> SPS React Components

## Install

```bash
npm install --save @spscommerce/ui-react
```

or

```bash
yarn add @spscommerce/ui-react
```

## Usage

```jsx
import React, { Component } from "react";

import MyComponent from "ui-react";

class Example extends Component {
  render() {
    return <MyComponent />;
  }
}
```

## Publishing a new version of this library

Ensure you have set up jFrog Artifactory Private and have publish access then run:

```
yarn build && yarn publish
```

Make sure to bump the version appropriately.

## License

UNLICENSED © [SPSCommerce](https://github.com/spscommerce)
