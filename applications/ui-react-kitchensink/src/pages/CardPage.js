import React, { Component, Fragment } from "react";
import { SpsCard } from "@spscommerce/ui-react";

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
export default class ButtonPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>@spscommerce/ui-react-card</h2>
        </div>
        <div className="row">
          <div className="col-3">
            <h4>No Header</h4>
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
            <h4>Header and Footer</h4>
            <CardHeaderFooter />
          </div>
        </div>
      </div>
    );
  }
}
