import React, { Component } from "react";
import { SpsNavLinkButton, SpsButton } from "../index";

export class SpsTabbedNavItem extends Component {
    render() {
        // We want to pluck out the preset since
        // the tabbed-nav requires the "tabbed" preset
        const { preset, to, ...props } = this.props;
        return to ? (
            <SpsNavLinkButton {...props} to={to} preset="tabbed" />
          ) : (
            <SpsButton {...props} preset="tabbed" />
          );
    }
}
