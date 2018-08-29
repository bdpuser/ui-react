import React, { Component } from "react";
import { SpsCard } from "@spscommerce/ui-react";
import { H1, H2 } from "../Headings";
import { SpsLiveExample } from "../Example";

export default class TabbedNavPage extends Component {
  render() {
    return (
      <SpsCard>
        <H1>Tabbed Nav</H1>
        <H2>Tabs with Routing </H2>
        <SpsLiveExample>
        {`
          <SpsCard>
            <SpsTabbedNav>
              <SpsTabbedNavItem
                preset="tabbed"
                message="Tab 1"
                icon="sps-icon sps-icon-envelope"
                to="/components/tabbed-nav/first"
              />
              <SpsTabbedNavItem
                preset="tabbed"
                message="Tab 2"
                icon="sps-icon sps-icon-download-cloud"
                to="/components/tabbed-nav/second"
              />
              <SpsTabbedNavItem
                preset="tabbed"
                message="Tab 3"
                icon="sps-icon sps-icon-comment-bubble-question"
                to="/components/tabbed-nav/third"
              />
            </SpsTabbedNav>{" "}
            <SpsCard>
              <ReactRouterDom.Switch>
                <ReactRouterDom.Redirect
                  exact
                  from="/components/tabbed-nav"
                  to="/components/tabbed-nav/first"
                />
                <ReactRouterDom.Route
                  exact
                  path="/components/tabbed-nav/first"
                  render={() => {
                    return (
                      <p>
                        Completely impact global deliverables through extensible users.
                        Collaboratively myocardinate flexible e-tailers whereas vertical
                        human capital. Uniquely redefine equity invested potentialities
                        for state of the art testing procedures. Objectively
                        reintermediate granular potentialities before flexible products.
                        Progressively pursue just in time vortals rather than integrated
                        technology. Assertively create orthogonal ROI after tactical
                        models. Authoritatively optimize cooperative.
                      </p>
                    );
                  }}
                />
                <ReactRouterDom.Route
                  exact
                  path="/components/tabbed-nav/second"
                  render={() => {
                    return (
                      <p>
                        Enthusiastically extend e-business ideas for high-quality synergy.
                        Conveniently create sustainable growth strategies and
                        enterprise-wide functionalities. Progressively productize
                        excellent products via transparent benefits. Energistically
                        actualize granular innovation and magnetic models. Professionally
                        deploy goal-oriented users rather than excellent quality vectors.
                        Collaboratively scale interoperable human capital after proactive
                        supply chains. Energistically whiteboard process-centric
                        e-commerce with innovative channels. Energistically unleash
                        installed.
                      </p>
                    );
                  }}
                />
                <ReactRouterDom.Route
                  exact
                  path="/components/tabbed-nav/third"
                  render={() => {
                    return (
                      <p>
                        Professionally pursue revolutionary schemas after ubiquitous
                        technologies. Interactively negotiate mission-critical human
                        capital without cost effective best practices. Intrinsicly
                        productize backend data and client-centric deliverables.
                        Objectively evisculate interoperable partnerships vis-a-vis
                        distributed experiences. Enthusiastically repurpose sticky
                        solutions without prospective solutions.
                      </p>
                    );
                  }}
                />
              </ReactRouterDom.Switch>
            </SpsCard>
          </SpsCard>
        `}
        </SpsLiveExample>
        <H2>Tabs with State </H2>
        <SpsLiveExample noInline={true}>
        {`
          const FirstTabbedPage = () => {
            return (
              <p>
                Completely impact global deliverables through extensible users.
                Collaboratively myocardinate flexible e-tailers whereas vertical human
                capital. Uniquely redefine equity invested potentialities for state of the
                art testing procedures. Objectively reintermediate granular potentialities
                before flexible products. Progressively pursue just in time vortals rather
                than integrated technology. Assertively create orthogonal ROI after
                tactical models. Authoritatively optimize cooperative.
              </p>
            );
          };
          const SecondTabbedPage = () => {
            return (
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
            );
          };
          const ThirdTabbedPage = () => {
            return (
              <p>
                Professionally pursue revolutionary schemas after ubiquitous technologies.
                Interactively negotiate mission-critical human capital without cost
                effective best practices. Intrinsicly productize backend data and
                client-centric deliverables. Objectively evisculate interoperable
                partnerships vis-a-vis distributed experiences. Enthusiastically repurpose
                sticky solutions without prospective solutions.
              </p>
            );
          };
          
          class Component extends React.Component {
            constructor(props) {
              super(props);
              this.state = {
                activeTab: 0
              };
            }
            renderActiveTab() {
              switch(this.state.activeTab) {
                case 0:
                  return <FirstTabbedPage />
                case 1:
                  return <SecondTabbedPage />
                case 2:
                  return <ThirdTabbedPage />
                default:
                  return <FirstTabbedPage />
              }
            }
            render() {
              return (
                <SpsCard>
                  <SpsTabbedNav>
                    <SpsTabbedNavItem
                      active={true}
                      preset="tabbed"
                      message="Tab 1"
                      value="Tab 1"
                      icon="sps-icon sps-icon-envelope"
                      onClick={ev => this.setState({activeTab: 0})}
                    />
                    <SpsTabbedNavItem
                      preset="tabbed"
                      message="Tab 2"
                      value="Tab 2"
                      icon="sps-icon sps-icon-download-cloud"
                      onClick={ev => this.setState({activeTab: 1})}
                    />
                    <SpsTabbedNavItem
                      preset="tabbed"
                      message="Tab 3"
                      value="Tab 3"
                      icon="sps-icon sps-icon-comment-bubble-question"
                      onClick={ev => this.setState({activeTab: 2})}
                    />
                  </SpsTabbedNav>
                  <SpsCard>
                    {this.renderActiveTab()}
                  </SpsCard>
                </SpsCard>
              );
            }
          }
          
          render(<Component />)
        `}
        </SpsLiveExample>
      </SpsCard>
    );
  }
}
