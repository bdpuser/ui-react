import React from "react";
import MessageBus from "./vanilla/messaging/MessageBus";
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

/**
 * used to get parameter off the hash
 * https://auth0.com/docs/api-auth/tutorials/implicit-grant
 * @param {string} name 
 */
const getParameterByName = (name) => {
  let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

const getAccessTokenFromStorage = () => {
  const token = sessionStorage.getItem("token");
  return token;
};

/**
 * look at the url and retrieve access token from the hash
 */
const getAccessTokenFromHash = () => {
  return getParameterByName("access_token");
};

const stripTrailingSlash = str => {
  return str[str.length-1]===("/") ? str.slice(0, -1) : str;
};

//TODO: Should we passing this function to the children components instead of the resolved values
// see line
const fetchCurrentUser = async token => {
  // lets make this return a promise or something
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
      initialRoute: this.getPathFromFrameUrl(),
      environment: null
    };
  }
  getPathFromFrameUrl() {
    const cpUrlHash = stripTrailingSlash(window.location.hash.substr(1));

    if (!cpUrlHash || cpUrlHash.length === 0 || cpUrlHash === "/") {
      // Sadly a default path is required due to iframe constraints
      // where the iframe will always load your app's slash/root
      // route even if that isn't at all where users will eventually
      // be routed.
      const indexPath = this.props.indexPath || "/home";

      this.messageBus.send("appStateChange", {
        path: indexPath
      });
      return indexPath;
    }
    return cpUrlHash;
  }

  setSpinner(newState) {
    const { frameStrategy } = this.props;
    if (frameStrategy === "iframe") {
      if (newState === "hide") {
        this.messageBus.send("spinnerHide");
      }
      // do we need to check for 'show'? It appears it isn't currently being used in this file.
      if (newState === "show") {
        this.messageBus.send("spinnerShow");
      }
    }
    if (frameStrategy === 'stand-alone') {
      // build in spinner wrapper component?
      // or just skip the spinner controls?
      console.log('set spinner to '+ newState);
    }
  }

  getCurrentEnvironment() {
    const { frameStrategy } = this.props;
    if (frameStrategy === "iframe") {
      this.messageBus.send("getEnvironment").onResponse(env => {
        this.setState({ environment: env || "prod" });
      });
    }
    if (frameStrategy === "stand-alone") {
      // TODO: figure out how to extrapolate the environment without Commerce Platform's message bus
      // DX-3342 https://atlassian.spscommerce.com/browse/DX-3342
      console.error("The ability to get environment has not been developed yet.")
    }
  }

  redirectLocalhostToCommercePlatformIframe() {
    const { openToUrl } = this.props;
    if (!isIframe()) {
      if (!!openToUrl) {
        if (openToUrl != null && openToUrl != "null") {
          document.location.replace(openToUrl);
        }
      } else {
        console.warn(
          "You should consider adding an openToUrl prop to your <CommercePlatform> component. openToUrl helps new local developers by redirecting them to your application inside the CommercePlatform iframe. This prop should match your app's dev center url in the dev environment. If you have not yet created your app in Dev Center then you will want to do that in order to ensure that it works properly before going to production."
        );
      }
    }
  }
  checkFrameStrategy(frameStrategy) {
    //TODO: this needs to change
    if (
      !frameStrategy ||
      (frameStrategy !== "iframe" && frameStrategy !== "stand-alone")
    ) {
      throw new InvalidFrameStrategyError(
        "Please set the <CommercePlatform> component's frameStrategy prop to the string 'iframe' or 'stand-alone'. These are the only currently supported frame strategies for this component."
      );
    }
  }
  componentDidMount() {
    const { frameStrategy } = this.props;
    if (frameStrategy === "iframe") {
      this.redirectLocalhostToCommercePlatformIframe();
    }

    this.checkFrameStrategy(this.props.frameStrategy);
    this.getCurrentEnvironment();
    this.refreshCurrentUser();
  }
  refreshCurrentUser = async () => {
    const { frameStrategy } = this.props;
    const accessToken =
      frameStrategy === "iframe"
        ? getAccessTokenFromStorage()
        : getAccessTokenFromHash();
    try {
      const resp = await fetchCurrentUser(accessToken);
      this.setState({ token: accessToken, currentUser: resp }, () => {
        this.setSpinner("hide");
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
      environment: this.state.environment,
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
