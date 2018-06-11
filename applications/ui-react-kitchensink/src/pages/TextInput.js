import React, { Component } from "react";
import { SpsTextInput, SpsCard } from "@spscommerce/ui-react";

import { ExampleSection } from "../Example";

export default class TextInputPage extends Component {
  render() {
    return (
      <SpsCard>
        <div className="row">
          <div className="col-md-4 col">
            <form className="needs-validation" noValidate>
              <h2>Base Input</h2>
                <ExampleSection>
              <p>Base</p>
                  <div className="sps-form-group">
                    <SpsTextInput
                      name="firstName"
                      inputLabel="First Name"
                      placeholder="Your first name"
                    />
                  </div>
                </ExampleSection>
                <ExampleSection>
                  <h2>Required/Error state</h2>
                  <p>
                    focus and then click elsewhere with the input empty and the
                    error state will display
                  </p>
                  <div className="sps-form-group">
                    <SpsTextInput
                      name="lastName"
                      inputLabel="Last Name - will validate on blur"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </ExampleSection>
                <ExampleSection>
                  <h2>Disabled</h2>
                  <div className="sps-form-group">
                    <SpsTextInput
                      name="somethingNotInteresting"
                      inputLabel="Disabled Input"
                      placeholder="no clicky..."
                      disabled
                    />
                  </div>
                </ExampleSection>
            </form>
          </div>
        </div>
      </SpsCard>
    );
  }
}
