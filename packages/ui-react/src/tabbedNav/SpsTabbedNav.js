import React, { Component } from "react";

export class SpsTabbedNav extends Component {
  render() {
    const { children, ariaLabel } = this.props;
    return (
      <div
        className="sps-tabbed-nav"
        role="group"
        aria-label={ariaLabel ? ariaLabel : "tabbed navigation with icons"}
      >
        {children}
        {/*
        ELLIPSES HAS YET TO BE IMPLEMENTED IN SpsTabbedNavigation:

        <button
          type="button"
          className="sps-tabbed-nav__nav-item"
          aria-label="Actions"
          id="tabbed-nav_dropown_example"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i
            className="sps-tabbed-nav__nav-item-icon sps-icon sps-icon-ellipses"
            aria-hidden="true"
            title="Open Actions Menu"
          />
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="tabbed-nav_dropown_example"
          >
            <a className="sps-dropdown__item" href="#">
              Document
            </a>
            <a className="sps-dropdown__item" href="#">
              User
            </a>
            <a className="sps-dropdown__item" href="#">
              Company
            </a>
            <a className="sps-dropdown__item" href="#">
              Item
            </a>
          </div>
        </button> */}
      </div>
    );
  }
}
