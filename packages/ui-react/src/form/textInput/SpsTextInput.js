import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const PRISTINE = "pristine";
const DIRTY = "dirty";
const ERROR = "error";
const VALID = "valid";

export default class SpsTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interactionState: PRISTINE,
      validity: null
    };
    this.inputRef = React.createRef();
  }

  blurHandler = event => {
    const { blurCallback } = this.props;
    if (typeof blurCallback === "function") {
      blurCallback(event);
      // should this return out before running internal validation?
    }
    this.validateInput(event);
  };

  internalChangeHandler = event => {
    this.setState((prev, props) => {
      if (prev.interactionState === PRISTINE) {
        return { interactionState: DIRTY };
      }
    });
    const { onChange } = this.props;
    if (typeof onChange === "function") {
      onChange(event);
    }
  };

  validateInput = event => {
    const { required, customValidator } = this.props;
    // should we allow validation on non-required?
    if (!required || !event || !event.currentTarget) {
      return;
    }
    const input = event.target;
    let valid = true;
    if (typeof customValidator === "function") {
      valid = customValidator(String(input.value));
    }
    if (!customValidator || typeof customValidator !== "function") {
      valid = input.value !== "" && input.value.length > 0;
    }
    if (!valid) {
      this.setState({ validity: ERROR });
    } else {
      this.setState({ validity: VALID });
    }
  };

  textLabel = (name, classes, inputLabel) => {
    return (
      <label htmlFor={name} className={classes}>
        {inputLabel}
      </label>
    );
  };

  render() {
    const {
      additionalClasses,
      blurCallback,
      customValidator,
      disabled,
      errorMessage,
      inputLabel,
      name,
      placeholder,
      required,
      tag: Tag,
      render,
      staticContext,
      value,
      onChange,
      ...props
    } = this.props;
    let { value: stateValue } = this.state;
    const invalid = this.state.validity === ERROR;

    const labelClassList = classnames("sps-form-group__label", {
      "sps-form-group_label--required": required
    });
    const inputClassList = classnames("sps-form-control");
    const useInputGroup = additionalClasses.indexOf("sps-input-group") !== -1;
    const groupClassList = classnames(
      { "sps-form-group": !useInputGroup },
      this.state.interactionState,
      {
        "sps-form-group--error": this.state.validity === ERROR
      },
      {
        "sps-form-group--required": required
      },
      additionalClasses
    );
    return (
      <div className={groupClassList}>
        {inputLabel ? this.textLabel(name, labelClassList, inputLabel) : null}
        <Tag
          ref={this.inputRef}
          className={inputClassList}
          type="text"
          id={name}
          name={name}
          placeholder={placeholder}
          onBlur={this.blurHandler}
          onChange={this.internalChangeHandler}
          aria-label={placeholder}
          value={value}
          disabled={disabled}
          required={required}
          {...props}
        />
        {this.state.validity === ERROR && required ? (
          <small className="error-feedback sps-form-group__feedback--error">
            {errorMessage}
          </small>
        ) : null}
      </div>
    );
  }
}

SpsTextInput.propTypes = {
  additionalClasses: PropTypes.array,
  blurCallback: PropTypes.func,
  customValidator: PropTypes.func,
  cols: PropTypes.string,
  disabled: PropTypes.bool,
  equired: PropTypes.bool,
  errorMessage: PropTypes.string,
  inputLabel: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.string,
  tag: PropTypes.string
};

SpsTextInput.defaultProps = {
  errorMessage: "This field is required",
  tag: "input",
  additionalClasses: [],
  value: ""
};
