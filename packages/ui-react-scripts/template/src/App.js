import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { CommercePlatformApp } from "@spscommerce/ui-react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <CommercePlatformApp
        frameStrategy="iframe"
        openToUrl={process.env.REACT_APP_OPEN_TO_URL}
      >
        <Route
          exact
          path="/home"
          render={() => {
            return (
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to
                  reload. yooo
                </p>
              </div>
            );
          }}
        />
      </CommercePlatformApp>
    );
  }
}

export default App;
