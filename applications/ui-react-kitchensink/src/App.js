import React, { Component, Fragment } from "react";
import {
  Route,
  HashRouter as Router,
  Redirect,
  Switch
} from "react-router-dom";
import { CommercePlatform, CommercePlatformUrl } from "@spscommerce/ui-react";
import "./App.css";
import ButtonPage from "./pages/ButtonPage";
import CardPage from "./pages/CardPage";
import InstallationPage from "./pages/getting-started/InstallationPage";
import NavPage from "./pages/NavPage";
import Nav from "./Nav";
import { SideNav } from "./SideNav";

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
                <div className="container-fluid">
                  <Router>
                    <CommercePlatformUrl>
                      <Fragment>
                        <Nav />
                        <div className="row">
                          <SideNav initialExpand="installation" />
                          <div className="col-9">
                            <Switch>
                              <Route
                                exact
                                path="/"
                                render={() => <Redirect to={initialRoute} />}
                              />
                              <Redirect
                                exact
                                from="/home"
                                to="/getting-started"
                              />
                              <Redirect
                                exact
                                from="/getting-started"
                                to="/getting-started/installation"
                              />
                              <Route
                                path="/getting-started/installation"
                                component={InstallationPage}
                              />
                              <Redirect
                                exact
                                from="/components"
                                to="/components/button"
                              />
                              <Route
                                path="/components/button"
                                component={ButtonPage}
                              />
                              <Route
                                path="/components/card"
                                component={CardPage}
                              />
                              <Route
                                path="/components/nav"
                                component={NavPage}
                              />
                              <Route
                                render={() => <div>404 - Not Found. </div>}
                              />
                            </Switch>
                          </div>
                        </div>
                      </Fragment>
                    </CommercePlatformUrl>
                  </Router>
                </div>
              </div>
            </div>
          );
        }}
      </CommercePlatform>
    );
  }
}

export default App;
