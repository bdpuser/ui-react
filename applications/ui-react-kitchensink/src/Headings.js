import React, { Component } from "react";
import { colors } from "@spscommerce/colors";

export class H1 extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <h1
        style={{
          color: colors.blue400,
          fontSize: "24px",
          fontWeight: 300,
          marginBottom: "1.5rem"
        }}
        {...props}
      >
        {children}
      </h1>
    );
  }
}

export class H2 extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <h2
        style={{
          color: colors.purple200,
          fontSize: "18px",
          fontWeight: 300,
          marginBottom: "0.75rem",
          marginTop: "1.5rem"
        }}
        {...props}
      >
        {children}
      </h2>
    );
  }
}
