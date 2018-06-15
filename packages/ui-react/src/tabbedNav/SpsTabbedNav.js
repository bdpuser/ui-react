import React, { Component } from "react";

// TODO: add functionality for out of bounds tab navs dropdown
export class SpsTabbedNav extends Component {
  render() {
    const { children } = this.props;
    return (
      <div
        className="sps-tabbed-nav"
        role="group"
        aria-label="SPS Tabbed Navigation with icons"
      >
        {children}
        {/*
        THE FOLLOWING HAS YET TO BE IMPLEMENTED IN SpsTabbedNavigation:

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
