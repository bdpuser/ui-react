import React, { Component } from "react";
import SpsButtonBase from "./SpsButtonBase";

export default class SpsButton extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <SpsButtonBase
        {...props}
        render={({
          props: { spinning, icon, message, type, render, onClick, ...rest },
          buttonIcon,
          className
        }) => {
          return (
            <button
              {...rest}
              className={className}
              onClick={onClick}
              type={type}
            >
              {spinning ? (
                <div className={`sps-spinner`}>Loading...</div>
              ) : null}
              {icon ? buttonIcon() : null}
              {message}
            </button>
          );
        }}
      />
    );
  }
}
