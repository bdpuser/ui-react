import React, { Component } from "react";

import { CommercePlatform } from "@spscommerce/ui-react";

export default class App extends Component {
  render() {
    return (
      <div>
        <CommercePlatform frameStrategy="iframe">
          <div>Inside Commerce Platform</div>
        </CommercePlatform>
      </div>
    );
  }
}
