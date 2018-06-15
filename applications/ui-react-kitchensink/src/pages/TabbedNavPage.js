import React, { Component, Fragment } from "react";
import {
  SpsTabbedNav,
  SpsTabbedNavItem,
  SpsCard
} from "@spscommerce/ui-react";
import {
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { H1, H2 } from "../Headings";
import { ExampleSection } from "../Example";

const FirstTabbedPage = () => {
  return (
    <SpsCard header="FIRST TAB">
      <p>
        Completely impact global deliverables through extensible users.
        Collaboratively myocardinate flexible e-tailers whereas vertical human
        capital. Uniquely redefine equity invested potentialities for state of
        the art testing procedures. Objectively reintermediate granular
        potentialities before flexible products. Progressively pursue just in
        time vortals rather than integrated technology. Assertively create
        orthogonal ROI after tactical models. Authoritatively optimize
        cooperative.
      </p>
    </SpsCard>
  );
};
const SecondTabbedPage = () => {
  return (
    <SpsCard header="SECOND TAB">
      <p>
        Enthusiastically extend e-business ideas for high-quality synergy.
        Conveniently create sustainable growth strategies and enterprise-wide
        functionalities. Progressively productize excellent products via
        transparent benefits. Energistically actualize granular innovation and
        magnetic models. Professionally deploy goal-oriented users rather than
        excellent quality vectors. Collaboratively scale interoperable human
        capital after proactive supply chains. Energistically whiteboard
        process-centric e-commerce with innovative channels. Energistically
        unleash installed.
      </p>
    </SpsCard>
  );
};
const ThirdTabbedPage = () => {
  return (
    <SpsCard header="THIRD TAB">
      <p>
        Professionally pursue revolutionary schemas after ubiquitous
        technologies. Interactively negotiate mission-critical human capital
        without cost effective best practices. Intrinsicly productize backend
        data and client-centric deliverables. Objectively evisculate
        interoperable partnerships vis-a-vis distributed experiences.
        Enthusiastically repurpose sticky solutions without prospective
        solutions.
      </p>
    </SpsCard>
  );
};

export default class TabbedNavPage extends Component {
  handleOnClick = e => {
    alert(`${e.target.value} was clicked`);
  };
  render() {
    return (
      <SpsCard>
        <H1>Tabbed Nav</H1>
        <ExampleSection>
          <H2>Tabbed Nav hyperlinks</H2>
          <SpsTabbedNav>
            <SpsTabbedNavItem
              preset="tabbed"
              message="Tab 1"
              icon="sps-icon sps-icon-envelope"
              to={`/components/tabbed-nav/first`}
            />
            <SpsTabbedNavItem
              preset="tabbed"
              message="Tab 2"
              icon="sps-icon sps-icon-download-cloud"
              to={`/components/tabbed-nav/second`}
            />
            <SpsTabbedNavItem
              preset="tabbed"
              message="Tab 3"
              icon="sps-icon sps-icon-comment-bubble-question"
              to={`/components/tabbed-nav/third`}
            />
          </SpsTabbedNav>{" "}
          <SpsCard>
              <Fragment>
                <Switch>
                  <Redirect
                    exact
                    from="/components/tabbed-nav"
                    to="/components/tabbed-nav/first"
                  />
                  <Route
                    exact
                    path={`/components/tabbed-nav/first`}
                    component={FirstTabbedPage}
                  />
                  <Route
                    exact
                    path={`/components/tabbed-nav/second`}
                    component={SecondTabbedPage}
                  />
                  <Route
                    exact
                    path={`/components/tabbed-nav/third`}
                    component={ThirdTabbedPage}
                  />
                </Switch>
              </Fragment>
          </SpsCard>
        </ExampleSection>
        <ExampleSection>
          <H2>Tabbed Nav buttons</H2>
          <SpsTabbedNav>
            <SpsTabbedNavItem
              preset="tabbed"
              message="Tab 1"
              value="Tab 1"
              icon="sps-icon sps-icon-envelope"
              onClick={this.handleOnClick}
            />
            <SpsTabbedNavItem
              preset="tabbed"
              message="Tab 2"
              value="Tab 2"
              icon="sps-icon sps-icon-download-cloud"
              onClick={this.handleOnClick}
            />
            <SpsTabbedNavItem
              preset="tabbed"
              message="Tab 3"
              value="Tab 3"
              icon="sps-icon sps-icon-comment-bubble-question"
              onClick={this.handleOnClick}
            />
          </SpsTabbedNav>
        </ExampleSection>
      </SpsCard>
    );
  }
}
