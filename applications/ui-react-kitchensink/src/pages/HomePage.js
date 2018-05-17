import React, { Component } from "react";

export default class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <h1>To use UI-React</h1>
        <h2>1. Create your react app using create-react-app</h2>
        <pre>npx create-react-app my-new-app</pre>
        <h2>2. Import the SPS Pattern Library CSS</h2>
        <p>
          Many components have css classes that pull from pattern library. As
          such your application must pull those in from a cdn or other source.
        </p>
        <h2>2. Import the SPS Fonts</h2>
        Most components use the standard SPS fonts. As such your application
        must pull those in from a cdn or other source.
        <h2>3. Import @spscommerce/ui-react</h2>
        <h2>4. Import react-router and react-router-dom</h2>
      </div>
    );
  }
}
