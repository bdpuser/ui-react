import React from "react";
import MessageBus from "../../vanilla/messaging/MessageBus";
import { CommercePlatformContext } from "./CommercePlatformContext";

export class InvalidFrameStrategyError extends Error {}
export class CouldNotFetchCurrentUserFromIdentityError extends Error {}
export class CouldNotRefreshCurrentUserFromIdentityError extends Error {}

// This needs to be brought somewhere else but it essentially
// allows you to use either render props, function as child or
// just children. This is super helpful in libraries where you
// want to allow a component to offer all of the various usage
// syntaxes.
const simpleRender = (props, renderCallback, emptyCallback) => {
  // Allow render prop or function as a child
  const { children, render = children } = props;

  // RENDER PROPS OR FAAC
  if (typeof render === "function") {
    return renderCallback(output => render(output));
  }

  // EMPTY
  if (!children && typeof emptyCallback === "function") {
    return emptyCallback();
  }

  //  CHILDREN
  return renderCallback(() => {
    return children;
  });
};

const isIframe = () => {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};

const getAccessTokenFromStorage = () => {
  const token = sessionStorage.getItem("token");
  return token;
};

const stripTrailingSlash = str => {
  return str.endsWith("/") ? str.slice(0, -1) : str;
};

//TODO: Should we passing this function to the children components instead of the resolved values
// see line
const fetchCurrentUser = async token => {
  try {
    const response = await fetch("https://dev.id.spsc.io/identity/users/me", {
      headers: {
        Authorization: "Bearer " + token
      }
    });
    return response.json();
  } catch (e) {
    throw new CouldNotFetchCurrentUserFromIdentityError();
  }
};

export default class CommercePlatform extends React.Component {
  constructor(props) {
    super(props);
    this.messageBus = new MessageBus();
    this.state = {
      token: null,
      currentUser: null,
      initialRoute: this.getPathFromFrameUrl()
    };
  }
  getPathFromFrameUrl() {
    const cpUrlHash = stripTrailingSlash(window.location.hash.substr(1));

    if (!cpUrlHash || cpUrlHash.length === 0 || cpUrlHash === "/") {
      const defaultPath = "/home";

      this.messageBus.send("appStateChange", { path: defaultPath });
      return defaultPath;
    }
    return cpUrlHash;
  }

  redirectLocalhostToCommercePlatformIframe() {
    const { opensToUrl } = this.props;
    if (!isIframe()) {
      if (!!opensToUrl) {
        document.location.replace(opensToUrl);
      } else {
        console.warn(
          "You should consider adding an opensToUrl prop to your <CommercePlatform> component. opensToUrl helps new local developers by redirecting them to your application inside the CommercePlatform iframe. This prop should match your app's dev center url in the dev environment. If you have not yet created your app in Dev Center then you will want to do that in order to ensure that it works properly before going to production."
        );
      }
    }
  }
  checkFrameStrategy(frameStrategy) {
    if (!frameStrategy) {
      throw new InvalidFrameStrategyError(
        "Please set the <CommercePlatform> component's frameStrategy prop to the string 'iframe'. It is the only currently supported frame strategy for Commerce Platform applications."
      );
    }
  }
  componentDidMount() {
    this.redirectLocalhostToCommercePlatformIframe();
    this.checkFrameStrategy(this.props.frameStrategy);
    this.refreshCurrentUser();
  }
  refreshCurrentUser = async () => {
    const accessToken = getAccessTokenFromStorage();
    try {
      const resp = await fetchCurrentUser(accessToken);
      this.setState({ token: accessToken, currentUser: resp }, () => {
        this.messageBus.send("spinnerHide");
      });
    } catch (e) {
      throw new CouldNotRefreshCurrentUserFromIdentityError();
    }
  };
  render() {
    // This object is passed down into child components
    // and represents the commerce platform api
    const commercePlatform = {
      token: this.state.token,
      currentUser: this.state.currentUser,
      initialRoute: this.state.initialRoute,
      refreshCurrentUser: this.refreshCurrentUser,
      isIframe: isIframe()
    };
    // setAccessToken,
    // getCurrentUser,
    // setTitle,
    // setUrl

    // This allows for either RENDER PROP or FUNCTION AS CHILD
    // to be used.
    return simpleRender(
      this.props,
      render => (
        <CommercePlatformContext.Provider value={commercePlatform}>
          {render(commercePlatform)}
        </CommercePlatformContext.Provider>
      ),
      () => {
        throw Error(
          "You must place an application inside of the <CommercePlatform> component as either a render prop, function as child, or child component."
        );
      }
    );
  }
}
