import React from "react";

/**
 * Check if element is a function or React element. Returns either the function
 * or an anonymous function which returns the react element
 *
 * @param {Function | React.Element} el
 * @returns {Function}
 */
const renderType = function(el) {
  if (typeof el === "function") {
    return el;
  } else if (React.isValidElement(el)) {
    return () => {
      return el;
    };
  } else {
    return null;
  }
};

export default renderType;
