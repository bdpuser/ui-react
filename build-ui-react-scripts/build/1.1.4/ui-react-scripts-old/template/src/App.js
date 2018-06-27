import React, { Component, Fragment } from "react";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Link,
  Switch
} from "react-router-dom";
import { CommercePlatform, CommercePlatformUrl } from "@spscommerce/ui-react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import "./App.css";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={`/home`}>Home</Link>
        </li>
        <li>
          <Link to={`/about`}>About</Link>
        </li>
      </ul>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <CommercePlatform
        frameStrategy="iframe"
        openToUrl={process.env.REACT_APP_OPEN_TO_URL}
      >
        {({ initialRoute }) => {
          return (
            <div className={`sps-page`}>
              <div className={`sps-body sps-body--collapse-600`}>
                <Router>
                  <CommercePlatformUrl>
                    <Fragment>
                      <h1>My App</h1>
                      <Nav />
                      <Switch>
                        <Route
                          exact
                          path="/"
                          render={() => <Redirect to={initialRoute} />}
                        />
                        <Route exact path="/home" component={HomePage} />
                        <Route exact path="/about" component={AboutPage} />
                      </Switch>
                    </Fragment>
                  </CommercePlatformUrl>
                </Router>
              </div>
            </div>
          );
        }}
      </CommercePlatform>
    );
  }
}

export default App;
