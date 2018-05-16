import React from "react";
import PropTypes from "prop-types";
import { withRouter, NavLink } from "react-router-dom";

const SpsNavLinkButton = props => {
  const {
    activeClassName = "active",
    // location,
    exact = true,
    // strict,
    // isActive,
    match,
    staticContext,
    activeStyle,
    to,
    className,
    style,
    // onClick,
    history,
    ...rest
  } = props; // ⬆ Anything above is a noop (has no effect) // ⬆ filtering out props that `button` doesn’t know but we need

  // Determine if to apply activeStyles or if you keep default styles
  const appliedStyle = match.path === to ? { ...style, ...activeStyle } : style;
  const appliedClassName =
    match.path === to ? className + " " + activeClassName : className;

  return (
    // <div>Yo</div>
    <NavLink
      {...rest} // `children` is just another prop!
      style={appliedStyle}
      className={appliedClassName}
      to={to}
      activeClassName="active"
      exact={exact}
    />
  );
};

SpsNavLinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default withRouter(SpsNavLinkButton);
