import React, { Fragment } from "react";
import { SpsCard } from "./SpsCard";
import { mount } from "enzyme";

fdescribe("SpsCard", () => {
  let mountedCard;
  let props;
  const mountCardComponent = () => {
    return mount(<SpsCard {...props}>{props.children}</SpsCard>);
  };
  afterEach(() => {
    props = {};
    mountedCard = null;
  });
  describe("SpsCard with header", () => {
    it("should display a text header", () => {
      props = {
        header: "I'm a header",
        children: "hello"
      };
      mountedCard = mountCardComponent();
      expect(mountedCard.find(".sps-card__header").length).toEqual(1);
      expect(mountedCard.find(".sps-card__title").text()).toEqual(
        "I'm a header"
      );
    });
    it("should display custom html within a header", () => {
      let renderHeader = () => {
        return (
          <Fragment>
            <i className="sps-icon sps-icon-file" />
            <span>Custom Header</span>
          </Fragment>
        );
      };
      props = {
        header: renderHeader,
        children: "hello"
      };
      mountedCard = mountCardComponent();
      expect(mountedCard.find(".sps-card__header").length).toEqual(1);
      expect(
        mountedCard
          .find(".sps-card__title")
          .containsMatchingElement(renderHeader)
      ).toEqual(true);
    });
  });
  describe("SpsCard default", () => {
    it("should display body content", () => {
      props = {
        children: "This is the card body text"
      };
      mountedCard = mountCardComponent();
      expect(mountedCard.find(".sps-card__body").text()).toEqual(
        "This is the card body text"
      );
    });
  });
  describe("SpsCard with footer", () => {
    it("should display a text footer", () => {
      props = {
        children: "This should have a text footer.",
        footer: "Here is a text footer"
      };
      mountedCard = mountCardComponent();
      expect(mountedCard.find(".sps-card__footer").text()).toEqual(
        "Here is a text footer"
      );
    });
    it("should display custom html within a footer", () => {
      let renderFooder = () => {
        return <div>Here is a custom Footer</div>;
      };
      props = {
        footer: renderFooder,
        children: "This should have a custom footer"
      };
      mountedCard = mountCardComponent();
      expect(mountedCard.find(".sps-card__footer").length).toEqual(1);
      expect(
        mountedCard
          .find(".sps-card__footer")
          .containsMatchingElement(renderFooder)
      ).toEqual(true);
    });
  });
});
