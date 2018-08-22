import React, { Component } from "react";
import {
  SpsGrowlerArea,
  SpsGrowlerFactory,
  SpsButton,
  SpsCard,
  SpsToggle
} from "@spscommerce/ui-react";
import { SpsExample } from "../Example";
import { H1, H2 } from "../Headings";

export default class GrowlerPage extends Component {
  state = {
    title: "HomePage",
    loading: false,
    applications: [],
    successShow: false,
    form: {
      type: "success",
      header: "Default header",
      message: "Here is a default message",
      duration: 5000,
      fade: false
    }
  };
  tmpl = (
    <div id="test">
      Hello, here is custom HTML.{" "}
      <a href="#/components/growler/">It even has a link!</a>
    </div>
  );
  iconTmpl = (
    <img
      src="https://www.spscommerce.com/wp-content/themes/divi-child-2016/images/logo-white.svg"
      alt="custom icon"
    />
  );
  onChangeHandler = e => {
    let form = Object.assign({}, this.state.form);
    if (e.target.type !== "checkbox") {
      form[e.target.name] = e.target.value;
    } else {
      form[e.target.name] = e.target.checked;
    }
    this.setState({ form: form });
  };
  showGrowler = e => {
    e.preventDefault();
    SpsGrowlerFactory[this.state.form.type](this.state.form.message, {
      fade: this.state.form.fade,
      timeoutDuration: this.state.form.duration,
      title: this.state.form.header
    });
  };
  showCustomBodyGrowler = () => {
    SpsGrowlerFactory[this.state.form.type](this.tmpl, {
      fade: this.state.form.fade,
      title: this.state.form.header
    });
  };
  showCustomIconGrowler = () => {
    SpsGrowlerFactory[this.state.form.type](this.state.form.message, {
      fade: this.state.form.fade,
      icon: this.iconTmpl,
      title: this.state.form.header
    });
  };
  showGrowlerWithOnClose = () => {
    SpsGrowlerFactory[this.state.form.type](this.tmpl, {
      fade: this.state.form.fade,
      title: this.state.form.header,
      onClose: growler => {
        alert(`Growler ${growler.id} has been closed`);
      }
    });
  };
  render() {
    return (
      <SpsCard>
        <H1>Growlers</H1>
        <H2>Basic Growlers</H2>
        <SpsExample>
          <form onSubmit={this.showGrowler}>
            <div className="row">
              <div className="col-2 sps-form-group">
                <label className="sps-form-group__label" htmlFor="type">
                  Select Growler Type
                </label>
                <span className="sps-select2-wrapper">
                  <select
                    name="type"
                    id="single_select2"
                    onChange={this.onChangeHandler}
                  >
                    <option value="success">Success</option>
                    <option value="error">Error</option>
                    <option value="warning">Warning</option>
                    <option value="info">Info</option>
                    <option value="pending">Pending</option>
                    <option value="default">Default</option>
                  </select>
                </span>
              </div>
              <div className="col-2 sps-form-group">
                <label className="sps-form-group__label" htmlFor="header">
                  Header Text
                </label>
                <input
                  type="text"
                  name="header"
                  className="sps-form-control"
                  onChange={this.onChangeHandler}
                  value={this.state.form.header}
                  placeholder="Enter growler header"
                />
              </div>
              <div className="col-3 sps-form-group">
                <label className="sps-form-group__label" htmlFor="message">
                  Body Text
                </label>
                <input
                  type="text"
                  name="message"
                  className="sps-form-control"
                  onChange={this.onChangeHandler}
                  value={this.state.form.message}
                  placeholder="Enter growler message"
                />
              </div>
              <div className="col-2 sps-form-group">
                <label className="sps-form-group__label" htmlFor="duration">
                  Fade duration
                </label>
                <input
                  type="text"
                  name="duration"
                  className="sps-form-control"
                  onChange={this.onChangeHandler}
                  value={this.state.form.duration}
                  placeholder="Enter growler message"
                  disabled={!this.state.form.fade}
                />
              </div>
              <div className="col-1 sps-form-group">
                <label className="sps-form-group__label" htmlFor="fade">
                  Fade
                </label>
                <SpsToggle
                  name="fade"
                  size="large"
                  onChange={this.onChangeHandler}
                  checked={this.state.form.fade}
                />
              </div>
              <div className="col-2 sps-form-group">
                <SpsButton
                  type="submit"
                  preset="confirm"
                  message="Add growler"
                />
              </div>
            </div>
          </form>
        </SpsExample>
        <H2>Custom body</H2>
        <p>
          The message property can be either a string, or a render function to
          support custom html within the body of the growler.
        </p>
        <SpsExample>
          <SpsButton
            onClick={this.showCustomBodyGrowler}
            preset="confirm"
            message="Add growler with custom HTML"
          />
        </SpsExample>
        <H2>Custom icon</H2>
        <p>
          Similar to the message property, the icon property accepts either a
          string (class name), or a render function for custom icons or images.
        </p>
        <SpsExample>
          <SpsButton
            onClick={this.showCustomIconGrowler}
            preset="confirm"
            message="Add growler with a custom icon"
          />
        </SpsExample>
        <H2>On close callback</H2>
        <p>
          Growlers can be assigned a callback function which triggers when the
          growler is closed either manually or via a fade timeout
        </p>
        <SpsExample>
          <SpsButton
            onClick={this.showGrowlerWithOnClose}
            preset="confirm"
            message="Add growler with onClose function"
          />
        </SpsExample>
        <SpsGrowlerArea />
      </SpsCard>
    );
  }
}
