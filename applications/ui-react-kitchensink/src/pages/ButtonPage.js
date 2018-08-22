import React, { Component, Fragment } from "react";
import { H1, H2 } from "../Headings";
import { SpsCard } from "@spscommerce/ui-react";
import { SpsLiveExample } from "../Example";

export default class ButtonPage extends Component {
  render() {
    return (
      <Fragment>
        <SpsCard>
          <H1>Buttons</H1>
          <p>
            HTML buttons allow developers to pass in any HTML support
            attributes/props as well as options such as icon, spinning (loading
            state), preset (style or type), and message.
          </p>

          <H2>Default Button</H2>
          <SpsLiveExample>
            {`
            <SpsCard>
              <SpsButton preset="default" message="Default Button" />
            </SpsCard>
            `}
          </SpsLiveExample>

          <H2>Error Button</H2>
          <SpsLiveExample>
            {`
            <SpsCard>
              <SpsButton preset="delete" message="Delete Button" />
            </SpsCard>
            `}
          </SpsLiveExample>

          <H2>Key Button</H2>
          <SpsLiveExample>
            {`
            <SpsCard>
              <SpsButton preset="key" message="Key Button" />
            </SpsCard>
            `}
          </SpsLiveExample>

          <H2>Confirm Button</H2>
          <SpsLiveExample>
            {`
            <SpsCard>
              <SpsButton preset="confirm" message="Confirm Button" />
            </SpsCard>
            `}
          </SpsLiveExample>

          <H2>Link Button</H2>
          <SpsLiveExample>
            {`
            <SpsCard>
              <SpsButton preset="link" message="Link Button" />
            </SpsCard>
            `}
          </SpsLiveExample>

          <H2>Disabled Button</H2>
          <SpsLiveExample>
            {`
            <SpsCard>
              <SpsButton preset="default" message="Disabled Button" disabled />
            </SpsCard>
            `}
          </SpsLiveExample>

          <H2>Icon Button</H2>
          <SpsLiveExample>
            {`
            <SpsCard>
              <SpsButton preset="default" message="Icon Button" icon="sps-icon sps-icon-status-locked" />
            </SpsCard>
            `}
          </SpsLiveExample>

          <H2>Loading Button</H2>
          <SpsLiveExample>
            {`
            <SpsCard>
              <SpsButton preset="confirm" message="Loading" spinning />
            </SpsCard>
            `}
          </SpsLiveExample>
          <hr />
          <H1>Hyperlink Buttons</H1>
          <p>
            These links depend on react-router to navigate to routes. As such
            they have the correct accessibility options given that they become
            hyperlinks that are styled like buttons.
          </p>
          <H2>Default Hyperlink Button</H2>
          <SpsLiveExample noInline={true}>
            {`
            <SpsCard>
              <SpsNavLinkButton
                preset="default"
                message="Default Hyperlink"
                to="/home"
              />{" "}
              <SpsNavLinkButton
                preset="delete"
                message="Delete Hyperlink"
                to="/home"
              />{" "}
              <SpsNavLinkButton
                preset="key"
                message="Key Hyperlink"
                to="/home"
              />{" "}
              <SpsNavLinkButton
                preset="confirm"
                message="Confirm Hyperlink"
                to="/home"
              />{" "}
              <SpsNavLinkButton
                preset="link"
                message="Link Hyperlink"
                to="/home"
              />
            </SpsCard>
            `}
          </SpsLiveExample>
          <H2>Active Hyperlink Button</H2>
          <SpsLiveExample>
            {`
          <SpsCard>
            <SpsNavLinkButton
              preset="default"
              message="Default Button"
              icon="sps-icon sps-icon-status-locked"
              to="/components/button"
            />{" "}
              <SpsNavLinkButton
                preset="delete"
                message="Delete Hyperlink"
                to="/components/button"
              />{" "}
              <SpsNavLinkButton
                preset="key"
                message="Key Hyperlink"
                to="/components/button"
              />{" "}
              <SpsNavLinkButton
                preset="confirm"
                message="Confirm Hyperlink"
                to="/components/button"
              />{" "}
              <SpsNavLinkButton
                preset="link"
                message="Link Hyperlink"
                to="/components/button"
              />
          </SpsCard>
          `}
          </SpsLiveExample>
        </SpsCard>
      </Fragment>
    );
  }
}
