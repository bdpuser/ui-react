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
    const { inputValue} = this.props;
    this.state = {
      interactionState: PRISTINE,
      validity: null,
      inputValue: inputValue
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

  changeHandler = event => {
    this.setState((prev, props) => {
      if (prev.interactionState === PRISTINE) {
        return { interactionState: DIRTY };
      }
    });
    const { onChange } = this.props;
    if (event.target.value !== "") {
      this.setState({
        inputValue: event.target.value
      });
      if (typeof onChange === "function") {
        onChange(event.target.value);
      }
    }
  };

  validateInput = event => {
    const { required, customValidator } = this.props;
    // should we allow validation on non-required?
    if (!required || !event || !event.currentTarget) {
      return;
    }
    const input = event.target;
    let valid;
    if (typeof customValidator === "function") {
      valid = customValidator(String(input.value));
    }
    if (!customValidator || customValidator !== "function") {
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
      cols,
      disabled,
      errorMessage,
      inputLabel,
      name,
      placeholder,
      required,
      rows,
      tag: Tag
    } = this.props;
    const invalid = this.state.validity === ERROR;
    const textAreaProps = { cols, rows };
    const { inputValue } = this.state;

    const labelClassList = classnames("sps-form-group__label", {
      "sps-form-group_label--required": required
    });
    const inputClassList = classnames(
      "sps-form-control",
      // {"is-invalid": this.state.validity === ERROR}
    )
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
          defaultValue={inputValue}
          className={inputClassList}
          type="text"
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onBlur={this.blurHandler}
          onChange={this.changeHandler}
          aria-label={placeholder}
          {...textAreaProps}
        />
        {this.state.validity === ERROR && required ? (
          <small className="error-feedback sps-form-group__feedback--error">{errorMessage}</small>
        ) : null}
      </div>
    );
  }
}

SpsTextInput.propTypes = {
  additionalClasses: PropTypes.array,
  blurCallback: PropTypes.func,
  customValidator: PropTypes.func,
  cols: PropTypes.number,
  disabled: PropTypes.bool,
  equired: PropTypes.bool,
  errorMessage: PropTypes.string,
  inputLabel: PropTypes.string,
  inputValue: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  tag: PropTypes.string
};

SpsTextInput.defaultProps = {
  errorMessage: "This field is required",
  tag: "input",
  additionalClasses: [],
  inputValue: ""
}
