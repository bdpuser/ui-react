import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter, NavLink } from "react-router-dom";
import SpsButtonBase from "./SpsButtonBase";

class SpsNavLinkButton extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <SpsButtonBase
        {...props}
        render={({
          props: {
            spinning,
            icon,
            message,
            type,
            activeClassName = "active",
            exact = true,
            match,
            staticContext,
            activeStyle,
            to,
            history,
            preset,
            render,
            ...rest
          },
          buttonIcon,
          className
        }) => {
          if (preset === "tabbed") {
            activeClassName = "sps-tabbed-nav__nav-item--active";
          }
          return (
            <NavLink
              {...rest}
              activeClassName={activeClassName}
              className={className}
              to={to}
              exact={exact}
            >
              {spinning ? (
                <div className={`sps-spinner`}>Loading...</div>
              ) : null}
              {icon ? buttonIcon() : null}
              {message}
            </NavLink>
          );
        }}
      />
    );
  }
}

SpsNavLinkButton.propTypes = {
  to: PropTypes.string.isRequired
};

export default withRouter(SpsNavLinkButton);
