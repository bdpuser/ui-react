import React, { Fragment } from "react";

const UnstyledIcon = ({ ariaHidden = "true", className }) => (
  <Fragment>
    <i className={className} aria-hidden={ariaHidden} />
  </Fragment>
);

export default UnstyledIcon;
