import React, { Component } from "react";
import classnames from "classnames";

export class SpsCard extends Component {
  render() {
    const { children, header, footer, ...rest } = this.props;
    const cardHeader = typeof header === "function" ? header : () => header;
    const cardBodyClasses = classnames("sps-card__body", {
      "has-header": header
    });
    const cardFooter = typeof footer === "function" ? footer : () => footer;
    return (
      <div className={`sps-card`}>
        {header ? (
          <div className={`sps-card__header`}>{cardHeader()}</div>
        ) : null}
        <div className={cardBodyClasses} {...rest}>
          {children}
        </div>
        {footer ? (
          <div className={`sps-card__footer`}>{cardFooter()}</div>
        ) : null}
      </div>
    );
  }
}

export default SpsCard;
