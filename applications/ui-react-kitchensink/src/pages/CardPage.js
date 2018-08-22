import React, { Component, Fragment } from "react";
import { SpsCard } from "@spscommerce/ui-react";
import { SpsLiveExample } from "../Example";
import { H1, H2 } from "../Headings";

export default class CardPage extends Component {
  render() {
    return (
      <Fragment>
        <SpsCard>
          <H1>Card</H1>
          <H2>Basic Examples</H2>
          <SpsLiveExample>
            {`
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <h4>No header</h4>
                  <SpsCard>
                    <div>Hello here is some content with no header</div>
                  </SpsCard>
                </div>
                <div className="col-3">
                  <h4>Header</h4>
                  <SpsCard
                    header={() => (
                      <span style={{ color: "red" }}>
                        <i className="fa fa-users" /> Custom Header
                      </span>
                    )}
                  >
                    <div>Hello here is some content with custom</div>
                  </SpsCard>
                </div>
                <div className="col-3">
                  <h4>Footer</h4>
                  <SpsCard footer="Footer Stuff">
                    <div>Hello here is some content with a footer</div>
                  </SpsCard>
                </div>
                <div className="col-3">
                  <h4>Header and footer</h4>
                  <SpsCard header="Header Stuff" footer="Footer Stuff">
                    <div>Hello here is some content with both!</div>
                  </SpsCard>
                </div>
              </div>
            </div>
            `}
          </SpsLiveExample>
        </SpsCard>
      </Fragment>
    );
  }
}
