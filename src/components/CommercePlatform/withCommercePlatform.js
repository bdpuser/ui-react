import React from "react";
import { CommercePlatformContext } from "./CommercePlatformContext";

const withCommercePlatform = EnhancedComponent => {
  return () => {
    return (
      <CommercePlatformContext.Consumer>
        {commercePlatform => (
          <EnhancedComponent commercePlatform={commercePlatform} />
        )}
      </CommercePlatformContext.Consumer>
    );
  };
};

export default withCommercePlatform;
