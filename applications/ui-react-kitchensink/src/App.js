import React, { Component, Fragment } from "react";
import {
  Route,
  HashRouter as Router,
  Redirect,
  Switch
} from "react-router-dom";
import {
  CommercePlatform,
  CommercePlatformUrl,
  ScrollToTop
} from "@spscommerce/ui-react";
import "./App.css";
import ButtonPage from "./pages/ButtonPage";
import CardPage from "./pages/CardPage";
import TogglePage from "./pages/TogglePage";
import TextInputPage from "./pages/TextInput";
import GrowlerPage from "./pages/GrowlerPage";
import InstallationPage from "./pages/getting-started/InstallationPage";
import NavPage from "./pages/NavPage";
import TabbedNavPage from "./pages/TabbedNavPage";
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
              <style>
                {`iframe {
                  display: none;
                }`}
              </style>
              <div className={`sps-body sps-body--collapse-600`}>
                <div className="container-fluid">
                  <Router>
                    <CommercePlatformUrl>
                      <ScrollToTop>
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
                                  path="/components/toggle"
                                  component={TogglePage}
                                />
                                <Route
                                  path="/components/textInput"
                                  component={TextInputPage}
                                />
                                <Route
                                  path="/components/growler"
                                  component={GrowlerPage}
                                />
                                <Route
                                  path="/components/nav"
                                  component={NavPage}
                                />
                                <Route
                                  path="/components/tabbed-nav"
                                  component={TabbedNavPage}
                                />
                                <Route
                                  render={() => <div>404 - Not Found. </div>}
                                />
                              </Switch>
                            </div>
                          </div>
                        </Fragment>
                      </ScrollToTop>
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
