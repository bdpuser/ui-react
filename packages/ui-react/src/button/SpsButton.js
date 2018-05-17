import React, { Component } from "react";

import { UnstyledIcon } from "../index";
import SpsButtonOrLinkButton from "./SpsButtonOrLinkButton";

export default class SpsButton extends Component {
  render() {
    const {
      disabled,
      icon,
      preset,
      message,
      spinning,
      onClick,
      ...props
    } = this.props;
    const buttonTypes = {
      confirm: "sps-btn--confirm",
      default: "sps-btn--default",
      delete: "sps-btn--delete",
      key: "sps-btn--key",
      link: "sps-btn--link",
      icon: "sps-btn--icon"
    };

    let className = "sps-btn";

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
    className += buttonClass;

    if (spinning) {
      className += " sps-btn--spinning";
    }

    if (disabled) {
      className += " disabled";
    }

    const buttonIcon =
      typeof icon === "function"
        ? icon
        : () => <UnstyledIcon className={icon} />;

    return (
      <span
        style={{
          display: "inline-block",
          cursor: disabled ? "not-allowed" : "auto"
        }}
      >
        <SpsButtonOrLinkButton
          {...props}
          className={className}
          onClick={onClick}
        >
          {spinning ? <div className={`sps-spinner`}>Loading...</div> : null}
          {icon ? buttonIcon() : null}
          {message}
        </SpsButtonOrLinkButton>
      </span>
    );
  }
}
