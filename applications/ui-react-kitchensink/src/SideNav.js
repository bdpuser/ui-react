import React, { Component } from "react";
import { SpsCard } from "@spscommerce/ui-react";
import { NavLink } from "react-router-dom";
import { colors } from "@spscommerce/colors";

class SideNavSection extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <div
        style={{
          marginBottom: "1.5rem"
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
}

class SideNavSectionTitle extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <div
        style={{
          color: colors.gray400,
          fontWeight: "bold",
          marginBottom: "0.5rem",
          paddingLeft: "1.175rem",
          textTransform: "uppercase"
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export class SideNavLink extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <div>
        <NavLink
          style={{
            display: "block",
            fontSize: "14px",
            paddingTop: "0.25rem",
            paddingBottom: "0.25rem",
            paddingLeft: "1.175rem",
            textDecoration: "none",
            borderLeft: "1px transparent solid"
          }}
          activeStyle={{
            fontWeight: "bold",
            color: colors.gray500,
            borderLeft: `1px solid ${colors.blue200}`,
            backgroundColor: colors.blue100
          }}
          {...props}
        >
          {children}
        </NavLink>
      </div>
    );
  }
}

export class SideNav extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <div className="col-3" {...props}>
        <SpsCard
          style={{
            paddingLeft: 0,
            paddingRight: 0
          }}
          header={() => (
            <div
              style={{
                textTransform: "uppercase",
                marginTop: "0.5rem",
                paddingLeft: "0.5rem",
                marginBottom: "0.5rem"
              }}
            >
              <strong>React at SPS Commerce</strong>
            </div>
          )}
        >
          <SideNavSection>
            <SideNavSectionTitle>GETTING STARTED</SideNavSectionTitle>
            <SideNavLink to={`/getting-started/installation`}>
              Installation
            </SideNavLink>
            <SideNavLink to={`/getting-started/usage`}>Usage</SideNavLink>
          </SideNavSection>
          <SideNavSection>
            <SideNavSectionTitle>COMPONENT DEMOS</SideNavSectionTitle>
            <SideNavLink to={`/components/button`}>Button</SideNavLink>
            <SideNavLink to={`/components/card`}>Card</SideNavLink>
          </SideNavSection>
          {children}
        </SpsCard>
      </div>
    );
  }
}
