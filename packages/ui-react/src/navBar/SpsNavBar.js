import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

export class NavBarBrand extends Component {
  render() {
    const { children, brandUrl, ...props } = this.props;
    return (
      <Link to={brandUrl} className={`sps-navbar__brand`} {...props}>
        {children}
      </Link>
    );
  }
}

export class NavBarBrandLogo extends Component {
  render() {
    const { children, brandLogo, brandName, ...props } = this.props;
    return (
      <Fragment>
        <img
          className={`sps-navbar__brand-logo`}
          src={brandLogo}
          aria-hidden="true"
          alt={brandName}
          {...props}
        />
      </Fragment>
    );
  }
}

export class NavBarBrandName extends Component {
  render() {
    const { children, brandName, ...props } = this.props;
    return (
      <span className={`sps-navbar__brand-name`} {...props}>
        {brandName}
      </span>
    );
  }
}

export class NavBarVerticalRule extends Component {
  render() {
    const { children, ...props } = this.props;
    return <span className="sps-vertical-rule" {...props} />;
  }
}

export class SpsNavBarItems extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <div className={`sps-navbar__nav`} {...props}>
        {children}
      </div>
    );
  }
}

export class SpsNavBarItem extends Component {
  render() {
    const { children, active = false, ...props } = this.props;
    const activeClassModifier = active ? "active" : "inactive";
    return (
      <div
        className={`sps-nav__item sps-nav__link ${activeClassModifier}`}
        {...props}
      >
        {children}
      </div>
    );
  }
}
export class NavBarContainer extends Component {
  render() {
    const { children, fixed, ...props } = this.props;
    return (
      <div
        className={classNames(`sps-navbar-container`, {
          "sps-navbar-container--fixed": fixed
        })}
        {...props}
      >
        <nav className="navbar sps-navbar sps-navbar__nav--full-width">
          {children}
        </nav>
      </div>
    );
  }
}

const navLinkStyle = { textDecoration: "none" };
const navLinkActiveStyle = {};
export class SpsNavBar extends Component {
  render() {
    const { appUrl, appLogo, appName, items, ...props } = this.props;
    if (typeof items !== "function") {
      throw Error("NavBar's items prop must be a function.");
    }
    return (
      <NavBarContainer {...props}>
        <NavBarBrand brandUrl={appUrl}>
          <NavBarBrandLogo brandName={appName} brandLogo={appLogo} />
          <NavBarBrandName brandName={appName} />
        </NavBarBrand>
        <NavBarVerticalRule />
        {items({
          SpsNavBarItems,
          SpsNavBarItem,
          navLinkStyle,
          navLinkActiveStyle
        })}
      </NavBarContainer>
    );
  }
}
