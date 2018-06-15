import React, { Component, Fragment } from "react";
import { UnstyledIcon } from "../index";

export default class SpsButtonBase extends Component {
  render() {
    const {
      disabled,
      icon,
      preset,
      message,
      spinning,
      className,
      type,
      to,
      href,
      onClick,
      activeClassName,
      exact = true,
      match,
      staticContext,
      activeStyle,
      style,
      render,
      history,
      ...props
    } = this.props;

    const buttonTypes = {
      confirm: "sps-btn--confirm",
      default: "sps-btn--default",
      delete: "sps-btn--delete",
      key: "sps-btn--key",
      link: "sps-btn--link",
      icon: "sps-btn--icon",
      tabbed: "sps-tabbed-nav__nav-item"
    };

    let buttonClassName = "sps-btn";

    if (!preset) {
      throw new Error("Preset is a required field");
    }
    if (!buttonTypes[preset]) {
      throw new Error("Invalid preset");
    }

    if (!message && !icon) {
      throw new Error("Either message or icon property is required");
    }

    const buttonClass = " " + buttonTypes[preset];
    buttonClassName += buttonClass;

    if (spinning) {
        buttonClassName += " sps-btn--spinning";
    }

    if (disabled) {
        buttonClassName += " disabled";
    }

    if (className) {
        buttonClassName += ` ${className}`;
    }

    const buttonIcon =
      typeof icon === "function"
        ? icon
        : () => <UnstyledIcon className={icon} />;

    const buttonProps = {
      props: this.props,
      buttonIcon: buttonIcon,
      className: buttonClassName
    };

    return <Fragment>{render(buttonProps)}</Fragment>;
  }
}
