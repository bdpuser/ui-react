import React, { Component, Fragment } from "react";
import { SpsCard } from "@spscommerce/ui-react";
import { colors } from "@spscommerce/colors";
import { H1, H2 } from "../../Headings";
import { Pre } from "../../Pre";

export default class InstallationPage extends Component {
  render() {
    return (
      <Fragment>
        <SpsCard>
          <H1>Installation</H1>
          <H2>Create a Commerce Platform UI application</H2>
          <p>
            This command generates the source code for a new Commerce Platform
            application:
          </p>
          <Pre>
            npx create-react-app my-new-react-project --scripts-version
            @spscommerce/ui-react-scripts
          </Pre>
          <p>The new app contains:</p>
          <ul style={{ fontSize: "14px" }}>
            <li>pattern library css</li>
            <li>fonts</li>
            <li>react</li>
            <li>react-router</li>
            <li>@spscommerce/ui-react (our component library)</li>
          </ul>
          <p>
            It also has an App.js file that contains some example routes and
            shows how to integrate react-router into CommercePlatform. This
            ensures that navigating in your application will also update the url
            in Commerce Platform.
          </p>
          <H2
            style={{
              color: colors.purple200,
              fontSize: "18px",
              fontWeight: 300,
              marginBottom: "0.75rem",
              marginTop: "1.5rem"
            }}
          >
            Installing @spscommerce/ui-react into an existing React application
          </H2>
          <p>
            If you aren't creating a Commerce Platform application then you can
            start from scratch.
          </p>
          <Pre>
            # using yarn<br />
            yarn add @spscommerce/ui-react <br />
            <br /># or using npm<br />npm install @spscommerce/ui-react
          </Pre>
          <p>
            Depending on the components you are using, you may need to bring in
            other dependencies. A typical app will also have the following
            dependencies, although you might not need them all depending on your
            app:
          </p>
          <ul style={{ fontSize: "14px" }}>
            <li>react</li>
            <li>react-dom</li>
            <li>react-router</li>
            <li>react-router-dom </li>
            <li>@spscommerce/colors</li>
          </ul>
          <p>
            Please note that our components and this documentation are very much
            a work in progress.
          </p>
        </SpsCard>
      </Fragment>
    );
  }
}
