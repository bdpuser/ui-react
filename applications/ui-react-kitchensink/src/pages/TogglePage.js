import React, { Component, Fragment } from "react";
import { SpsToggle, SpsCard } from "@spscommerce/ui-react";
import { ExampleContainer, ExampleSection } from "../Example";
import { H1, H2 } from "../Headings";

export default class TogglePage extends Component {
  render() {
    return (
      <Fragment>
        <SpsCard>
          <H1>Toggle</H1>
          <ExampleSection>
            <H2>Default</H2>
            <SpsToggle />
          </ExampleSection>
          <ExampleSection>
            <H2>Disabled</H2>
            <SpsToggle disabled />
          </ExampleSection>
          <ExampleSection>
            <H2>Large</H2>
            <SpsToggle size="large" />
          </ExampleSection>
        </SpsCard>
      </Fragment>
    );
  }
}
