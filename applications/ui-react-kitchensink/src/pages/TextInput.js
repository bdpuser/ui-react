import React, { Component } from "react";
import { SpsTextInput, SpsCard } from "@spscommerce/ui-react";

import { ExampleSection } from "../Example";

export default class TextInputPage extends Component {
  state = { firstName: "Roberto", lastName: "Roberts", number: "" };
  buttonTriggerStateChange = e => {
    this.setState({ firstName: "Nate" }, () => {
    });
  };
  firstNameInputHandler = e => {
    this.setState({ firstName: e.target.value });
  };
  lastNameChangeHandler = e => {
    this.setState({ lastName: e.target.value });
  };
  numberHandler = e => {
    const newVal = e.target.value === "" ? "" : String(e.target.value);
    this.setState({number: newVal});
  }
  checkIfEven = e => {
    return (e * 1) % 2 === 0;
  }

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
                    value={this.state.firstName}
                    placeholder="Your first name"
                    onChange={this.firstNameInputHandler}
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
                    onChange={this.lastNameChangeHandler}
                    value={this.state.lastName}
                    required
                  />
                </div>
              </ExampleSection>
              <ExampleSection>
                <h2>Custom validation</h2>
                <p>
                  Using <em>customValidator</em> as a prop name, pass in a function to the SpsTextInput that returns true or false. (Remeber, validation occurs on blur)
                </p>
                <p>This custom validator checks to see if the input is an even number</p>
                <div className="sps-form-group">
                  <SpsTextInput
                    name="evenNumber"
                    inputLabel="Your favorite even number"
                    placeholder="Input an even number"
                    onChange={this.numberHandler}
                    value={this.state.number}
                    customValidator={this.checkIfEven}
                    errorMessage="An even number, please!"
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
                    onChange={()=>{}}
                    disabled
                  />
                </div>
              </ExampleSection>
            </form>
          </div>
          <div className="col col-4">
            <button onClick={this.buttonTriggerStateChange}>
              Set first name programmatically.{" "}
            </button>
          </div>
        </div>
      </SpsCard>
    );
  }
}
