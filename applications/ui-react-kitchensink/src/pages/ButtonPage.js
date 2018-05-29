import React, { Component, Fragment } from "react";
import { SpsButton, SpsCard } from "@spscommerce/ui-react";
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
const HyperlinksAsButtonsExample = props => {
  return (
    <ExampleContainer>
      <SpsButton preset="default" message="Default Hyperlink" {...props} />{" "}
      <SpsButton preset="delete" message="Delete Hyperlink" {...props} />{" "}
      <SpsButton preset="key" message="Key Hyperlink" {...props} />{" "}
      <SpsButton preset="confirm" message="Confirm Hyperlink" {...props} />{" "}
      <SpsButton preset="link" message="Link Hyperlink" {...props} />
    </ExampleContainer>
  );
};

export default class ButtonPage extends Component {
  render() {
    return (
      <Fragment>
        <SpsCard>
          <H1>Button</H1>
          <ExampleSection>
            <H2>Basic</H2>
            <ButtonsAsButtonsExample />
          </ExampleSection>
          <ExampleSection>
            <H2>Disabled</H2>
            <ButtonsAsButtonsExample disabled="disabled" />
          </ExampleSection>
          <ExampleSection>
            <H2>Hyperlink</H2>
            <p>
              These have a 'to' props and depend on react-router to navigate to
              routes. As such they have the correct accessibility options given
              that they become hyperlinks that are styled like buttons.
            </p>
            <HyperlinksAsButtonsExample to={`/`} />
          </ExampleSection>
          <ExampleSection>
            <H2>Active hyperlink</H2>
            <HyperlinksAsButtonsExample to={`/components/button`} />
          </ExampleSection>
          <ExampleSection>
            <H2>Disabled hyperlink</H2>
            <HyperlinksAsButtonsExample
              to={`/components`}
              disabled="disabled"
            />
          </ExampleSection>
        </SpsCard>
      </Fragment>
    );
  }
}
