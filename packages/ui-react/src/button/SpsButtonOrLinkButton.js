import React from "react";
import SpsNavLinkButton from "./SpsNavLinkButton";

// This component exists because sometimes you want
// something styled like a button but that performs
// navigation. Semantically we want to use a hyperlink
// in those cases instead of a button element.
// Note that on a hyperlink the type props is ignored
// and a role prop with a value of button is added for
// accessibility purposes.
const SpsButtonOrLinkButton = ({ to, type, children, ...props }) => {
  return to ? (
    <SpsNavLinkButton {...props} to={to}>
      {children}
    </SpsNavLinkButton>
  ) : (
    <button {...props} type={type}>
      {children}
    </button>
  );
};

export default SpsButtonOrLinkButton;
