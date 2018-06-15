import React, { Component, Fragment } from "react";
import { SpsButton, SpsNavLinkButton, SpsCard } from "@spscommerce/ui-react";
import { H1, H2 } from "../Headings";
import { ExampleContainer, ExampleSection } from "../Example";
const ButtonsAsButtonsExample = props => {
  return (
    <ExampleContainer>
      <SpsButton preset="default" message="Default Button" {...props} />{" "}
      <SpsButton preset="delete" message="Delete Button" {...props} />{" "}
      <SpsButton preset="key" message="Key Button" {...props} />{" "}
      <SpsButton preset="confirm" message="Confirm Button" {...props} />{" "}
      <SpsButton preset="link" message="Link Styled Button" {...props} />
    </ExampleContainer>
  );
};
const AdvancedButtonsAsButtonsExample = props => {
  return (
    <ExampleContainer>
      <SpsButton
        preset="default"
        message="Default Button"
        icon="sps-icon sps-icon-status-locked"
        {...props}
      />{" "}
      <SpsButton preset="confirm" message="Delete Button" spinning {...props} />{" "}
    </ExampleContainer>
  );
};
const HyperlinksAsButtonsExample = props => {
  return (
    <ExampleContainer>
      <SpsNavLinkButton
        preset="default"
        message="Default Hyperlink"
        {...props}
      />{" "}
      <SpsNavLinkButton preset="delete" message="Delete Hyperlink" {...props} />{" "}
      <SpsNavLinkButton preset="key" message="Key Hyperlink" {...props} />{" "}
      <SpsNavLinkButton
        preset="confirm"
        message="Confirm Hyperlink"
        {...props}
      />{" "}
      <SpsNavLinkButton preset="link" message="Link Hyperlink" {...props} />
    </ExampleContainer>
  );
};
const AdvancedHyperlinksAsButtonsExample = props => {
  return (
    <ExampleContainer>
      <SpsNavLinkButton
        preset="default"
        message="Default Button"
        icon="sps-icon sps-icon-status-locked"
        {...props}
      />{" "}
      <SpsNavLinkButton
        preset="confirm"
        message="Delete Button"
        spinning
        {...props}
      />{" "}
    </ExampleContainer>
  );
};
export default class ButtonPage extends Component {
  render() {
    return (
      <Fragment>
        <SpsCard>
          <H1>SpsButton/SpsNavLinkButton</H1>
          <SpsCard header="SpsButton">
            <ExampleSection>
              <p>
                HTML buttons allow developers to pass in any HTML support
                attributes/props as well as options such as icon, spinning
                (loading state), preset (style or type), and message.
              </p>
              <H2>Basic</H2>
              <ButtonsAsButtonsExample />
            </ExampleSection>
            <ExampleSection>
              <H2>Disabled</H2>
              <ButtonsAsButtonsExample disabled="disabled" />
            </ExampleSection>
            <ExampleSection>
              <H2>Advanced</H2>
              <AdvancedButtonsAsButtonsExample />
            </ExampleSection>
          </SpsCard>
          <br />
          <SpsCard header="SpsNavLinkButton">
            <ExampleSection>
              <p>
                These links depend on react-router to navigate to routes. As
                such they have the correct accessibility options given that they
                become hyperlinks that are styled like buttons.
              </p>
              <H2>Basic hyperlink</H2>
              <HyperlinksAsButtonsExample to={`/`} />
            </ExampleSection>
            <ExampleSection>
              <H2>Active hyperlink</H2>
              <p>
                React Router&apos;s NavLink component defaults to an active state
                class of "active". To apply a custom style, add the
                activeClassName property
              </p>
              <HyperlinksAsButtonsExample to={`/components/button`} />
            </ExampleSection>
            <ExampleSection>
              <H2>Disabled hyperlink</H2>
              <HyperlinksAsButtonsExample
                to={`/components`}
                disabled="disabled"
              />
            </ExampleSection>
            <ExampleSection>
              <H2>Advanced hyperlink</H2>
              <AdvancedHyperlinksAsButtonsExample to={`/components`} />
            </ExampleSection>
          </SpsCard>
        </SpsCard>
      </Fragment>
    );
  }
}
