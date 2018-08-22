import React, { Component, Fragment } from "react";
import { SpsCard } from "@spscommerce/ui-react";
import { SpsLiveExample } from "../Example";
import { H1, H2 } from "../Headings";

export default class TogglePage extends Component {
  render() {
    return (
      <Fragment>
        <SpsCard>
          <H1>Toggle</H1>
          <H2>Default</H2>
          <SpsLiveExample>
            {`
              <SpsCard>
                <SpsToggle />
              </SpsCard>
            `}
          </SpsLiveExample>

          <H2>Disabled</H2>
          <SpsLiveExample>
            {`
              <SpsCard>
                <SpsToggle disabled />
              </SpsCard>
            `}
          </SpsLiveExample>

          <H2>Large</H2>
          <SpsLiveExample>
            {`
              <SpsCard>
                <SpsToggle size="large" />
              </SpsCard>
            `}
          </SpsLiveExample>
        </SpsCard>
      </Fragment>
    );
  }
}
