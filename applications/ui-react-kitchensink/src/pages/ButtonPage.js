import React, { Component, Fragment } from "react";
import { SpsButton } from "@spscommerce/ui-react";

const ButtonsAsButtonsExample = props => {
  return (
    <Fragment>
      <SpsButton preset="default" message="Default Button" {...props} />
      <SpsButton preset="delete" message="Delete Button" {...props} />
      <SpsButton preset="key" message="Key Button" {...props} />
      <SpsButton preset="confirm" message="Confirm Button" {...props} />
      <SpsButton preset="link" message="Link Styled Button" {...props} />
    </Fragment>
  );
};
const HyperlinksAsButtonsExample = props => {
  return (
    <Fragment>
      <SpsButton preset="default" message="Default Hyperlink" {...props} />
      <SpsButton preset="delete" message="Delete Hyperlink" {...props} />
      <SpsButton preset="key" message="Key Hyperlink" {...props} />
      <SpsButton preset="confirm" message="Confirm Hyperlink" {...props} />
      <SpsButton preset="link" message="Link Hyperlink" {...props} />
    </Fragment>
  );
};

export default class ButtonPage extends Component {
  render() {
    return (
      <div>
        <h2>@spscommerce/ui-react-button</h2>
        <div>
          <h2>Buttons acting as buttons</h2>
        </div>
        <div>
          <ButtonsAsButtonsExample />
        </div>
        <div>
          <h2>Buttons acting as buttons disabled</h2>
        </div>
        <div>
          <ButtonsAsButtonsExample disabled="disabled" />
        </div>
        <div>
          <h2>Hyperlinks acting as buttons</h2>
          <p>
            These have a 'to' props and depend on react-router to navigate to
            routes. As such they have the correct accessibility options given
            that they become hyperlinks that are styled like buttons.
          </p>
          <h3>When hyperlink url doesn't match the current page url</h3>
          <HyperlinksAsButtonsExample to={`/`} />
          <h3>When hyperlink url matches the current page url</h3>
          <HyperlinksAsButtonsExample to={`/examples/button`} />
          <h3>When hyperlink is disabled</h3>
          <HyperlinksAsButtonsExample to={`/examples`} disabled="disabled" />
        </div>
      </div>
    );
  }
}
