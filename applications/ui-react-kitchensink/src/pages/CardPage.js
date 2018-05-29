import React, { Component, Fragment } from "react";
import { SpsCard } from "@spscommerce/ui-react";
import { ExampleContainer } from "../Example";
import { H1, H2 } from "../Headings";

const CardNoHeader = props => {
  return (
    <SpsCard>
      <div>Hello here is some content with no header</div>
    </SpsCard>
  );
};

const CardHeaderCustom = props => {
  return (
    <SpsCard
      header={() => (
        <span style={{ color: "red" }}>
          <i className={`fa fa-users`} /> Custom Header
        </span>
      )}
    >
      <div>Hello here is some content with custom</div>
    </SpsCard>
  );
};

const CardFooter = props => {
  return (
    <SpsCard footer={`Footer Stuff`}>
      <div>Hello here is some content with a footer</div>
    </SpsCard>
  );
};

const CardHeaderFooter = props => {
  return (
    <SpsCard header={`Header Stuff`} footer={`Footer Stuff`}>
      <div>Hello here is some content with both!</div>
    </SpsCard>
  );
};
export default class CardPage extends Component {
  render() {
    return (
      <Fragment>
        <SpsCard>
          <H1>Card</H1>
          <H2>Basic Examples</H2>
          <ExampleContainer>
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <h4>No header</h4>
                  <CardNoHeader />
                </div>
                <div className="col-3">
                  <h4>Header</h4>
                  <CardHeaderCustom />
                </div>
                <div className="col-3">
                  <h4>Footer</h4>
                  <CardFooter />
                </div>
                <div className="col-3">
                  <h4>Header and footer</h4>
                  <CardHeaderFooter />
                </div>
              </div>
            </div>
          </ExampleContainer>
        </SpsCard>
      </Fragment>
    );
  }
}
