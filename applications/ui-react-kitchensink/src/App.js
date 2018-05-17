import React, { Component, Fragment } from "react";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Link,
  Switch
} from "react-router-dom";
import { CommercePlatform, CommercePlatformUrl } from "@spscommerce/ui-react";
import "./App.css";
import ButtonPage from "./pages/ButtonPage";
import HomePage from "./pages/HomePage";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={`/home`}>Home</Link>
        </li>
        <li>
          <Link to={`/examples`}>Examples</Link>
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
                      <Nav />
                      <Switch>
                        <Route
                          exact
                          path="/"
                          render={() => <Redirect to={initialRoute} />}
                        />
                        <Route exact path="/home" component={HomePage} />
                        <Route
                          path="/examples"
                          render={() => {
                            return (
                              <div>
                                <Link to={`/examples/button`}>Buttons</Link>
                                <Route
                                  path="/examples/button"
                                  component={ButtonPage}
                                />
                              </div>
                            );
                          }}
                        />
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
