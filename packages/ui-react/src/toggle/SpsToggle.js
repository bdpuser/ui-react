import React, { Component, Fragment } from "react";

export default class SpsToggle extends Component {
  render() {
    const { size, ...props } = this.props;
    const classes = {
      large: "sps-toggle--large"
    };
    let className = "sps-toggle";
    if (size && classes[size]) {
      const sizeClass = " " + classes[size];
      className += sizeClass;
    } else if (size && !classes[size]) {
      throw new Error("Please use a valid size");
    }
    return (
      <Fragment>
        <label className={className}>
          <ToggleInput {...props} />
          <span className={`sps-toggle__slider`} />
        </label>
      </Fragment>
    );
  }
}
export class ToggleInput extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <Fragment>
        <input {...props} type="checkbox" className={`sps-toggle__input`} />
      </Fragment>
    );
  }
}
