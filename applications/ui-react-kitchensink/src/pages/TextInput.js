import React, { Component, Fragment } from "react";
import { SpsTextInput, SpsCard } from "@spscommerce/ui-react";
import { H1, H2 } from "../Headings";
import { ExampleSection, SpsLiveExample } from "../Example";

export default class TextInputPage extends Component {
  render() {
    return (
      <Fragment>
        <SpsCard>
          <H1>TextInput</H1>
          <H2>Basic Examples</H2>
          <SpsLiveExample noInline={true}>
            {`
            class Component extends React.Component {
              constructor(props) {
                super(props);
                this.state = {
                  firstName: "Roberto",
                  lastName: "Roberts",
                  number: "",
                  bio: "From the red dunes of the planet Mars..."
                }
              }
              textInputHandler (e) {
                this.setState({ [e.target.name]: e.target.value });
              }
              render () {
                return (
                  <SpsCard>
                    <div className="row">
                      <div className="col-md-5 col">
                        <form className="needs-validation" noValidate>
                          <h2>Base Input</h2>
                          <p>Base</p>
                          <div className="sps-form-group">
                            <SpsTextInput
                              name="firstName"
                              inputLabel="First Name"
                              value={this.state.firstName}
                              placeholder="Your first name"
                              onChange={this.textInputHandler.bind(this)}
                            />
                            {this.state.firstName}
                          </div>
                        </form>
                      </div>
                    </div>
                  </SpsCard>
                )
              }
            }

            render(<Component />)
            `}
          </SpsLiveExample>
        </SpsCard>
      </Fragment>
    );
  }
}

export class TextInputPage2 extends Component {
  state = {
    firstName: "Roberto",
    lastName: "Roberts",
    number: "",
    bio: "From the red dunes of the planet Mars..."
  };
  buttonTriggerStateChange = e => {
    this.setState({ firstName: "Nate" }, () => {});
  };
  textInputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  numberHandler = e => {
    const newVal = e.target.value === "" ? "" : String(e.target.value);
    this.setState({ number: newVal });
  };
  checkIfEven = e => {
    return (e * 1) % 2 === 0;
  };

  render() {
    return (
      <SpsCard>
        <div className="row">
          <div className="col-md-5 col">
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
                    onChange={this.textInputHandler}
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
                    onChange={this.textInputHandler}
                    value={this.state.lastName}
                    required
                  />
                </div>
              </ExampleSection>
              <ExampleSection>
                <h2>Custom validation</h2>
                <p>
                  Using <em>customValidator</em> as a prop name, pass in a
                  function to the SpsTextInput that returns true or false.
                  (Remeber, validation occurs on blur)
                </p>
                <p>
                  This custom validator checks to see if the input is an even
                  number
                </p>
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
                    onChange={() => {}}
                    disabled
                  />
                </div>
              </ExampleSection>
              <h2>textarea</h2>
              <ExampleSection>
                <div className="sps-form-group">
                  <SpsTextInput
                    name="bio"
                    tag="textarea"
                    rows="7"
                    inputLabel="A biography just about you"
                    value={this.state.bio}
                    placeholder="I would say I reget the cake the most. The cake was a lie..."
                    onChange={this.textInputHandler}
                  />
                </div>
              </ExampleSection>
            </form>
          </div>
          <div className="col col-4 offset-md-1">
            <button onClick={this.buttonTriggerStateChange}>
              Set first name programmatically.{" "}
            </button>
            <p>
              First Name: {this.state.firstName}
              <br />
              Last Name: {this.state.lastName}
              <br />
              Number: {this.state.number}
              Bio: {this.state.bio}
            </p>
          </div>
        </div>
      </SpsCard>
    );
  }
}
