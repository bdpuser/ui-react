import React from "react";
import { CommercePlatformContext } from "./CommercePlatformContext";

const withCommercePlatform = EnhancedComponent => {
  return props => {
    return (
      <CommercePlatformContext.Consumer>
        {commercePlatform => (
          <EnhancedComponent {...props} commercePlatform={commercePlatform} />
        )}
      </CommercePlatformContext.Consumer>
    );
  };
};

export default withCommercePlatform;
