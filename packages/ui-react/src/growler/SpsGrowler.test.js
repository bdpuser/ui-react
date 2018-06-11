import React from "react";
import classnames from "classnames";
import { SpsGrowlerFactory } from "./SpsGrowlerFactory";
import { mount } from "enzyme";
import { UnstyledIcon } from "../icon/UnstyledIcon";
import renderType from "./renderType";
import EventManager from "../commercePlatform/vanilla/utils/EventManager";
import { SpsGrowlerArea, SpsGrowler } from "./SpsGrowler";
jest.useFakeTimers();

describe("SpsGrowlerArea", () => {
  let props;
  let mountedSpsGrowlerArea;
  let mountedGrowler;

  const mountGrowlerArea = () => {
    if (!mountedSpsGrowlerArea) {
      mountedSpsGrowlerArea = mount(<SpsGrowlerArea {...props} />);
    }
    return mountedSpsGrowlerArea;
  };

  beforeEach(() => {
    props = {
      growlerList: undefined
    };
    mountedSpsGrowlerArea = undefined;
    mountedGrowler = mountGrowlerArea();
  });
  it("should be empty by default", () => {
    const mountedGrowler = mountGrowlerArea();
    expect(mountedGrowler.find(".sps-growler").length).toEqual(0);
  });
  it("should add a growler when GROWLER.SHOW event is triggered", () => {
    const mountedGrowler = mountGrowlerArea();
    const growler = { id: 1, type: "success" };
    const growler2 = { id: 2, type: "success" };

    EventManager.emit("GROWLER.SHOW", growler);
    EventManager.emit("GROWLER.SHOW", growler2);
    // trigger timers
    jest.runAllTimers();
    // force an update
    mountedGrowler.update();
    expect(mountedGrowler.find(".sps-growler").length).toEqual(2);
  });
  it("should remove a growler when GROWLER.HIDE event is triggered", () => {
    const mountedGrowler = mountGrowlerArea();
    const growler3 = { id: 3, type: "success" };
    const growler4 = { id: 4, type: "success" };
    const growlersArray = [growler3, growler4];
    mountedGrowler.setState({ growlerList: growlersArray });
    expect(mountedGrowler.find(".sps-growler").length).toEqual(2);
    EventManager.emit("GROWLER.HIDE", growler3);
    // trigger timers
    jest.runAllTimers();
    // force an update
    mountedGrowler.update();
    expect(mountedGrowler.find(".sps-growler").length).toEqual(1);
    EventManager.emit("GROWLER.HIDE", growler4);
    // trigger timers
    jest.runAllTimers();
    // force an update
    mountedGrowler.update();
    expect(mountedGrowler.find(".sps-growler").length).toEqual(0);
  });
});
describe("SpsGrowler", () => {
  const iconClasses = {
    success: "sps-icon sps-icon-checkmark",
    error: "sps-icon sps-icon-exclamation-circle",
    warning: "sps-icon sps-icon-exclamation-triangle",
    info: "sps-icon sps-icon-info-circle",
    pending: "sps-spinner",
    default: "sps-icon sps-icon-info-circle"
  };
  let props;
  let mountedSpsGrowler;
  const mountGrowler = () => {
    if (!mountedSpsGrowler) {
      mountedSpsGrowler = mount(<SpsGrowler {...props} />);
    }
    return mountedSpsGrowler;
  };
  beforeEach(() => {
    props = {
      opts: undefined
    };
    mountedSpsGrowler = undefined;
  });
  describe("SpsGrowler icon", () => {
    it("should display a default icon if !opts.icon", () => {
      props = {
        opts: {
          id: 0,
          msg: "hello",
          preset: "success"
        }
      };
      const growler = mountGrowler();
      expect(
        growler
          .find(".sps-growler__icon-box")
          .children()
          .hasClass(iconClasses["success"])
      ).toBe(true);
    });
    it("should display a custom icon if opts.icon is a function or react element", () => {
      props = {
        opts: {
          id: 0,
          msg: "hello",
          preset: "success",
          icon: () => {
            return <img className="test-icon" />;
          }
        }
      };
      const growler = mountGrowler();
      expect(
        growler
          .find(".sps-growler__icon-box")
          .children()
          .is("img")
      ).toBe(true);
      expect(
        growler
          .find(".sps-growler__icon-box")
          .children()
          .hasClass("test-icon")
      ).toBe(true);
    });
    it("should display a custom icon class if opts.icon === string", () => {
      props = {
        opts: {
          id: 0,
          msg: "hello",
          preset: "success",
          icon: "fa fa-test"
        }
      };
      const growler = mountGrowler();
      expect(
        growler
          .find(".sps-growler__icon-box")
          .children()
          .hasClass("fa fa-test")
      ).toBe(true);
    });
  });
  describe("SpsGrowler close button", () => {
    it("should trigger callback on close", () => {
      const callback = jest.fn().mockReturnValue("hello");
      EventManager.emit = jest.fn();
      props = {
        opts: {
          id: 3,
          msg: "Dunder Mifflin",
          preset: "success",
          onClose: callback
        }
      };
      const growler = mountGrowler();
      growler.find(".sps-growler__close-button").simulate("click");
      expect(callback).toHaveBeenCalled();
      expect(EventManager.emit).toHaveBeenCalledWith(
        "GROWLER.HIDE",
        props.opts
      );
    });
  });
});
