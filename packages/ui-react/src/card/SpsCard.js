import React, { Component } from "react";
import classnames from "classnames";

class SpsCardHeader extends Component {
  render() {
    const { header } = this.props;
    const cardHeader =
      typeof header === "function"
        ? header
        : () => {
            return <h4 className="sps-card__title">{header}</h4>;
          };
    return (
      <div className={`sps-card__header`}>{ cardHeader()}</div>
    );
  }
}

export class SpsCard extends Component {
  render() {
    const { children, header, footer, className, ...rest } = this.props;
    const cardClasses = classnames("sps-card", className);
    const cardBodyClasses = classnames("sps-card__body", {
      "has-header": header
    });
    const cardFooter = typeof footer === "function" ? footer : () => footer;
    return (
      <div className={cardClasses}>
        {header ? (
          <SpsCardHeader header={header} />
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
