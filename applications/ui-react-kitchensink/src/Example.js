import React, { Component } from "react";
import { colors } from "@spscommerce/colors";

export class ExampleSection extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <div style={{ marginBottom: "2rem" }} {...props}>
        {children}
      </div>
    );
  }
}

export class ExampleContainer extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <div
        style={{
          backgroundColor: colors.gray200,
          padding: "1rem"
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
} 
