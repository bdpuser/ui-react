import { SpsGrowlerFactory } from "./SpsGrowlerFactory";
import EventManager from "../commercePlatform/vanilla/utils/EventManager/EventManager";
import { uid } from "../commercePlatform/vanilla/utils/uid";
jest.mock("../commercePlatform/vanilla/utils/EventManager/EventManager");
jest.mock("../commercePlatform/vanilla/utils/uid");

describe("SpsGrowlerFactory", () => {
  beforeEach(() => {
    uid.mockReturnValue("10");
    // Clear all mocks
    Object.keys(EventManager).map(method => {
      if (EventManager[method].mockClear) {
        EventManager[method].mockClear();
      }
    });
  });
  describe("SpsGrowlerFactory.error", () => {
    it("should create a error growler", () => {
      SpsGrowlerFactory.error("hello", { fade: true });
      expect(EventManager.emit).toHaveBeenCalledWith("GROWLER.SHOW", {
        fade: true,
        id: "10",
        msg: "hello",
        preset: "error"
      });
    });
    it("should emit an event", () => {
      SpsGrowlerFactory.error("hello", { fade: true });
      expect(EventManager.emit.mock.calls.length).toEqual(1);
    });
  });
  describe("SpsGrowlerFactory.info", () => {
    it("should create a info growler", () => {
      SpsGrowlerFactory.info("hello", { fade: true });
      expect(EventManager.emit).toHaveBeenCalledWith("GROWLER.SHOW", {
        fade: true,
        id: "10",
        msg: "hello",
        preset: "info"
      });
    });
    it("should emit an event", () => {
      SpsGrowlerFactory.info("hello", { fade: true });
      expect(EventManager.emit.mock.calls.length).toEqual(1);
    });
  });
  describe("SpsGrowlerFactory.success", () => {
    it("should create a success growler", () => {
      SpsGrowlerFactory.success("hello", { fade: true });
      expect(EventManager.emit).toHaveBeenCalledWith("GROWLER.SHOW", {
        fade: true,
        id: "10",
        msg: "hello",
        preset: "success"
      });
    });
    it("should emit an event", () => {
      SpsGrowlerFactory.success("hello", { fade: true });
      expect(EventManager.emit.mock.calls.length).toEqual(1);
    });
  });
  describe("SpsGrowlerFactory.pending", () => {
    it("should create a pending growler", () => {
      SpsGrowlerFactory.pending("hello", { fade: true });
      expect(EventManager.emit).toHaveBeenCalledWith("GROWLER.SHOW", {
        fade: true,
        id: "10",
        msg: "hello",
        preset: "pending"
      });
    });
    it("should emit an event", () => {
      SpsGrowlerFactory.pending("hello", { fade: true });
      expect(EventManager.emit.mock.calls.length).toEqual(1);
    });
  });
  describe("SpsGrowlerFactory.warning", () => {
    it("should create a warning growler", () => {
      SpsGrowlerFactory.warning("hello", { fade: true });
      expect(EventManager.emit).toHaveBeenCalledWith("GROWLER.SHOW", {
        fade: true,
        id: "10",
        msg: "hello",
        preset: "warning"
      });
    });
    it("should emit an event", () => {
      SpsGrowlerFactory.warning("hello", { fade: true });
      expect(EventManager.emit.mock.calls.length).toEqual(1);
    });
  });
  describe("SpsGrowlerFactory.default", () => {
    it("should create a success default", () => {
      SpsGrowlerFactory.default("hello", { fade: true });
      expect(EventManager.emit).toHaveBeenCalledWith("GROWLER.SHOW", {
        fade: true,
        id: "10",
        msg: "hello",
        preset: "default"
      });
    });
    it("should emit an event", () => {
      SpsGrowlerFactory.default("hello", { fade: true });
      expect(EventManager.emit.mock.calls.length).toEqual(1);
    });
  });
});
