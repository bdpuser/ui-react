import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CommercePlatform } from "@spscommerce/ui-react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./pages/Button";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to={`/`}>Home</Link>
      </li>
      <li>
        <Link to={`/examples`}>Examples</Link>
      </li>
    </ul>
  );
};

// <CommercePlatform frameStrategy="iframe">
class App extends Component {
  render() {
    return (
      <CommercePlatform>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <div className="App">
                    <Nav />
                    <h1>To use UI-React</h1>
                    <h2>1. Create your react app using create-react-app</h2>
                    <pre>npx create-react-app my-new-app</pre>
                    <h2>2. Import the SPS Pattern Library CSS</h2>
                    <p>
                      Many components have css classes that pull from pattern
                      library. As such your application must pull those in from
                      a cdn or other source.
                    </p>
                    <h2>2. Import the SPS Fonts</h2>
                    Most components use the standard SPS fonts. As such your
                    application must pull those in from a cdn or other source.
                    <h2>3. Import @spscommerce/ui-react</h2>
                    <h2>4. Import react-router and react-router-dom</h2>
                  </div>
                );
              }}
            />
            <Route
              path="/examples"
              render={() => {
                return (
                  <div>
                    <Nav />
                    <Link to={`/examples/button`}>Buttons</Link>
                    <Route path="/examples/button" component={Button} />
                  </div>
                );
              }}
            />
          </Switch>
        </Router>
      </CommercePlatform>
    );
  }
}
//

export default App;
