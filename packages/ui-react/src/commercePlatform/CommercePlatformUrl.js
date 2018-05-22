import React, { Component, Fragment } from "react";
import { withRouter } from "react-router";
import MessageBus from "./vanilla/messaging/MessageBus";
import { CommercePlatformContext } from "./CommercePlatformContext";
/**
 * This component watches for react-router url changes that
 * and sends them to Commerce Platform via the message bus
 * so that the browser url bar reflects with the url state
 * of your react application inside of the iframe.
 *
 * Usage:
 *   <CommercePlatform >
 *     <Router>
 *       <CommercePlatformUrl>
 *         <Route />
 *         <Route />
 *       </CommercePlatformUrl>
 *     </Router>
 *   </CommercePlatform>
 *
 * Please note that this does handle the opposite direction
 * when, for example, a new url is typed in the url bar by
 * a user.
 *
 * For that functionality please see the initialRoute value
 * provided by the CommercePlatform component.
 */
class CommercePlatformUrlWithoutRouter extends Component {
  constructor(props) {
    super(props);
    this.messageBus = new MessageBus();
  }
  componentDidMount() {
    this.props.history.listen((toLocation, action) => {
      this.messageBus.send("appStateChange", { path: toLocation.pathname });
    });
  }
  render() {
    return (
      <CommercePlatformContext.Consumer>
        {commercePlatform => {
          return <Fragment>{this.props.children}</Fragment>;
        }}
      </CommercePlatformContext.Consumer>
    );
  }
}
export const CommercePlatformUrl = withRouter(CommercePlatformUrlWithoutRouter);
