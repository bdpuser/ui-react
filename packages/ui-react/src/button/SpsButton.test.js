import React from "react";
import SpsButton from "./SpsButton";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import SpsNavLinkButton from "./SpsNavLinkButton";

describe("SpsButtonBase", () => {
    let mountedButton;
    let mountedNavLinkButton;
    let props;
    let mountButton = () => {
        return mount(<SpsButton {...props} />);
    };
    let mountNavLinkButton = () => {
        return mount(<MemoryRouter initialEntries={["/"]}><SpsNavLinkButton {...props} /></MemoryRouter>);
    }
    beforeEach(() => {
        props = null;
    })
    describe("SpsButton", () => {
        it("should throw an error if preset is undefined", () => {
            // suppress console.error message to clean up test output
            jest.spyOn(console, 'error').mockImplementation(() => { console.log("error was successfully thrown")});
            props = {};
            expect(() => {mountButton()}).toThrowError("Preset is a required field");
        });
        it("should throw an error for an invalid preset", () => {
            // suppress console.error message to clean up test output
            jest.spyOn(console, 'error').mockImplementation(() => { console.log("error was successfully thrown")});
            props = {preset:"notARealPreset"};
            expect(() => {mountButton() }).toThrowError("Invalid preset");
        });
        it("should throw an error if neither message nor icon are defined", () => {
            // suppress console.error message to clean up test output
            jest.spyOn(console, 'error').mockImplementation(() => { console.log("error was successfully thrown")});
            props = {preset:"default"};
            expect(() => {mountButton() }).toThrowError("Either message or icon property is required");
        });
        it("should display spinner when spinning=true", () => {
            props = {preset:"default", message:"I be spinning!", spinning:true}
            mountedButton = mountButton();
            expect(mountedButton.find(".sps-spinner").length).toEqual(1);
            expect(mountedButton.find("SpsButton").find("button").hasClass("sps-btn--spinning")).toEqual(true);
        })
        it("should be disabled when disabled= true", () => {
            props = {preset:"default", message:"I should be disabled", disabled:true}
            mountedButton = mountButton();
            expect(mountedButton.find("SpsButton").find("button").hasClass("disabled")).toEqual(true);
        });
        it("should display an icon font when icon prop is not a function", () => {
            props = {preset:"default", icon:"sps-icon sps-icon-camera"}
            mountedButton = mountButton();
            expect(mountedButton.find("i").length).toEqual(1);
            expect(mountedButton.find("i").hasClass("sps-icon")).toEqual(true);
            expect(mountedButton.find("i").hasClass("sps-icon-camera")).toEqual(true);
        });
        it("should display custom HTML when icon is a render function", () => {
            props = {preset:"default", icon: ()=> { return (<div className="test"></div>)}}
            mountedButton = mountButton();
            expect(mountedButton.find("div").length).toEqual(1);
            expect(mountedButton.find("div").hasClass("test")).toEqual(true);
        });
        it("should include custom classNames", () => {
            props = {className: "test-class1 test-class2", preset: "default", message: "hello"};
            mountedButton = mountButton();
            expect(mountedButton.find("SpsButton").find("button").hasClass("test-class1")).toEqual(true);
            expect(mountedButton.find("SpsButton").find("button").hasClass("test-class2")).toEqual(true);
        })
    });
    describe("SpsNavLinkButton", () => {
        it("should use a default class name of 'active' when 'to' matches current router path", () => {
            props = {preset:"default", message: "hi", to: "/"}
            mountedNavLinkButton = mountNavLinkButton();
            expect(mountedNavLinkButton.find("SpsNavLinkButton").find("a").hasClass("active")).toEqual(true);
        })
        it("should use a custom class name when 'to' matches current router path", () => {
            props = {preset:"default", message: "hi", to: "/", activeClassName: "custom-active"}
            mountedNavLinkButton = mountNavLinkButton();
            expect(mountedNavLinkButton.find("SpsNavLinkButton").find("a").hasClass("custom-active")).toEqual(true);
        })
        it("should use 'sps-tabbed-nav__nav-item--active' for active link state class when preset=tabbed", () => {
            props = {preset:"tabbed", message: "hi", to: "/"}
            mountedNavLinkButton = mountNavLinkButton();
            expect(mountedNavLinkButton.find("SpsNavLinkButton").find("a").hasClass("sps-tabbed-nav__nav-item--active")).toEqual(true);
        })
    });
})
