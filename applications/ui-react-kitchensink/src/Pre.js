import React, { Component } from "react";
import { colors } from "@spscommerce/colors";

export class Pre extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <pre
        style={{
          fontSize: "14px",
          borderRadius: ".1875rem",
          backgroundColor: colors.gray100,
          color: colors.gray500,
          border: `1px solid ${colors.gray300}`,
          padding: "1rem"
        }}
        {...props}
      >
        {children}
      </pre>
    );
  }
}
