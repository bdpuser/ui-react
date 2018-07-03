import React from "react";
import SpsTextInput from "./SpsTextInput";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

describe("SpsTextInput tests", () => {
  it("renders correctly", () => {
    const output = renderer
      .create(<SpsTextInput inputLabel="first name" name="firstName" onChange={() => {return}}/>)
      .toJSON();
    expect(output).toMatchSnapshot();
  });
  it("contains input element", () => {
    const wrapper = mount(<SpsTextInput name="firstName" onChange={() => {return}}/>);
    expect(wrapper.find("input")).toBeDefined();
  });
  it("should have a label", () => {
    const wrapper = mount(
      <SpsTextInput inputLabel="first name" name="firstName" onChange={() => {return}} />
    );
    expect(wrapper.find("label").text()).toBe("first name");
  });
  it("should be marked as required when required is a prop", () => {
    const wrapper = mount(
      <SpsTextInput inputLabel="first name" name="firstName" required onChange={() => {return}} />
    );
    expect(
      wrapper
        .find("input")
        .html()
        .indexOf("required")
    ).not.toBe(-1);
  });
  it("should be disabled when disabled is a prop", () => {
    const wrapper = mount(
      <SpsTextInput inputLabel="first name" name="firstName" disabled onChange={() => {return}} />
    );
    expect(
      wrapper
        .find("input")
        .html()
        .indexOf("disabled")
    ).not.toBe(-1);
  });
  describe("basic validation", () => {
    it("should validate with input", () => {
      const wrapper = mount(
        <SpsTextInput inputLabel="first name" name="firstName" required onChange={() => {return}} />
      );
      jest.spyOn(wrapper.instance(), "validateInput");
      wrapper.find("input").simulate("blur", { target: { value: "Bob" } });
      expect(wrapper.instance().validateInput).toHaveBeenCalled();
      expect(wrapper.state("validity")).toBe("valid");
    });
    it("should invalidate with no input", () => {
      const wrapper = mount(
        <SpsTextInput inputLabel="first name" name="firstName" required onChange={() => {return}} />
      );
      jest.spyOn(wrapper.instance(), "validateInput");
      wrapper.find("input").simulate("blur", { target: { value: "" } });
      expect(wrapper.instance().validateInput).toHaveBeenCalled();
      expect(wrapper.state("validity")).toBe("error");
      expect(wrapper.find("small.error-feedback").text()).toBe(
        "This field is required"
      );
    });
  });
  describe("callbacks", () => {
    it("should trigger blur callback when provided", () => {
      const callbackSpy = jest.fn();
      const wrapper = mount(
        <SpsTextInput
          inputLabel="first name"
          name="firstName"
          blurCallback={callbackSpy}
          required
          onChange={() => {return}}
        />
      );
      wrapper.find("input").simulate("blur", { target: { value: "Oh boy" } });
      expect(callbackSpy).toHaveBeenCalled();
    });
    it("should trigger custom validator when provided", () => {
      const validatorSpy = jest.fn().mockReturnValue("valid");
      const wrapper = mount(
        <SpsTextInput
          inputLabel="first name"
          name="firstName"
          customValidator={validatorSpy}
          required
          onChange={() => {return}}
        />
      );
      wrapper.find("input").simulate("change", { target: { value: "Bob" } });
      wrapper
        .find("input")
        .simulate("blur", { target: { value: "Chat Noir" } });
      expect(validatorSpy).toHaveBeenCalledWith("Chat Noir");
      expect(wrapper.state("validity")).toBe("valid");
    });
    // TODO: test dirty/pristine
  });
});
