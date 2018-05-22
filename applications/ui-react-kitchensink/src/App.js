import React, { Component, Fragment } from "react";
import {
  Route,
  HashRouter as Router,
  Redirect,
  Link,
  Switch
} from "react-router-dom";
import { CommercePlatform, CommercePlatformUrl } from "@spscommerce/ui-react";
import "./App.css";
import ButtonPage from "./pages/ButtonPage";
import HomePage from "./pages/HomePage";
import NavPage from "./pages/NavPage";
import Nav from "./Nav";

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
                                <Link to={`/examples/button`}>Buttons</Link>{" "}
                                <Link to={`/examples/nav`}>Nav Bar</Link>
                                <Route
                                  path="/examples/button"
                                  component={ButtonPage}
                                />
                                <Route
                                  path="/examples/nav"
                                  component={NavPage}
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
