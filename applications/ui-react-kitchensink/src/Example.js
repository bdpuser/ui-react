import React, { Component } from "react";
import { colors } from "@spscommerce/colors";
import { spsExample } from "./Example.css";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import * as Sps from "@spscommerce/ui-react";
import prettier from "prettier/standalone";
import babylonPlugins from "prettier/parser-babylon";
import * as ReactRouterDom from "react-router-dom";
export class ExampleSection extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <div style={{ marginBottom: "2rem" }} {...props}>
        {children}
      </div>
    );
  }
}

export class SpsExample extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <div className={spsExample} {...props}>
        {children}
      </div>
    );
  }
}

export const formatExampleContents = exampleContents => {
  const prettierContents = prettier.format(exampleContents, {
    semi: true,
    useCache: false,
    parser: "babylon",
    plugins: [babylonPlugins]
  });
  const slicedContents = prettierContents.slice(0, -2);
  return slicedContents;
};

export class SpsLiveExample extends React.Component {
  state = { exampleContents: formatExampleContents(this.props.children) };
  handlePrettifySource = () => {
    this.setState({
      exampleContents: formatExampleContents(this.state.exampleContents)
    });
  };
  handleExampleChange = newContents => {
    console.log(newContents);
    this.setState({
      exampleContents: newContents
    });
  };
  render() {
    const code = this.state.exampleContents;
    const { noInline, ...props } = this.props;
    return (
      <ExampleSection>
        <LiveProvider
          code={code}
          scope={{ SpsExample, ReactRouterDom, props: {}, colors, ...Sps }}
          transformCode={str => {
            if (!noInline) {
              return `<React.Fragment>${str.trim()}</React.Fragment>`;
            }
            return str;
          }}
          noInline={noInline}
          {...props}
        >
          <SpsExample>
            <LivePreview />
          </SpsExample>
          <div
            style={{
              position: "relative",
              top: 10,
              right: 10,
              height: 0,
              textAlign: "right"
            }}
          >
            <button
              title="Format with Prettier"
              style={{ backgroundColor: "transparent", borderWidth: "0px" }}
              onClick={this.handlePrettifySource}
            >
              <img
                alt="Format with Prettier"
                style={{ height: "20px", cursor: "pointer" }}
                src="https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-icon-clean-centred.png"
              />
            </button>
          </div>
          <LiveEditor
            style={{ minHeight: "50px", fontSize: "14px" }}
            onChange={this.handleExampleChange}
            ignoreTabKey={true}
          />
          <pre>
            <LiveError />
          </pre>
        </LiveProvider>
      </ExampleSection>
    );
  }
}
