import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CommercePlatform from "./CommercePlatform";
import { CommercePlatformUrl } from "./CommercePlatformUrl";

export class CommercePlatformApp extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <CommercePlatform {...props}>
        {({ initialRoute }) => {
          return (
            <Router>
              <CommercePlatformUrl>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => {
                      return <Redirect to={initialRoute} />;
                    }}
                  />
                  {children}
                </Switch>
              </CommercePlatformUrl>
            </Router>
          );
        }}
      </CommercePlatform>
    );
  }
}
