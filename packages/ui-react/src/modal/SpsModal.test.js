import React from "react";
import { SpsModal } from "./SpsModal";
import { mount } from "enzyme";
import {SpsButton} from "@spscommerce/ui-react";

describe("SpsModal", () => {
    let mountedModal;
    let props;
    const mountModalComponent = () => {
        return mount(<SpsModal {...props}>{props.children}</SpsModal>);
    };
    beforeEach(() => {
        props = null;
        mountedModal = null;
    });

    it("should throw an error if preset is undefined", () => {
        props = {
            id: "test_modal",
            header: "This is the default title style"
        };
        expect(() => {mountModalComponent()}).toThrowError("Preset is a required field");
    });

    it("should throw an error for an invalid preset", () => {
        props = {
            id: "test_modal",
            preset:"notARealPreset",
            header: "This is the default title style"
        };
        expect(() => {mountModalComponent() }).toThrowError("Invalid preset");
    });

    it("should throw an error if id is undefined", () => {
        props = {
            preset:"notARealPreset",
            header: "This is the default title style"
        };
        expect(() => {mountModalComponent() }).toThrowError("Id is a required field");
    });
    
    it("should display a text header", () => {
        props = {
            id: "test_modal",
            preset: "default",
            header: "This is the default title style"
        };
        mountedModal = mountModalComponent();
        expect(mountedModal.find(".sps-modal__header").length).toEqual(1);
        expect(mountedModal.find(".sps-modal__title").text()).toEqual(
            "This is the default title style"
        );
    });

    it("should display custom html within a header", () => {
        let renderHeader = () => {
            return (
                <h1>This is custom header</h1>
            );
        };
        props = {
            id: "test_modal",
            preset: "default",
            header: renderHeader,
            children: "This is the modal body."
        };
        mountedModal = mountModalComponent();
        expect(mountedModal.find(".sps-modal__header").length).toEqual(1);
        expect(
            mountedModal
                .find(".sps-modal__header")
                .containsMatchingElement(renderHeader)
        ).toEqual(true);
    });

    it("should create a default modal", () => {
        props = {
            id: "test_modal",
            preset: "default",
            header: "This is the default title style",
            children: "This is the body of default modal."
        };
        mountedModal = mountModalComponent();
        expect(mountedModal.find(".sps-modal").hasClass('sps-modal--default')).toEqual(true);
    });

    it("should create a success modal", () => {
        props = {
            id: "test_modal",
            preset: "success",
            children: "This is the body of success modal."
        };
        mountedModal = mountModalComponent();
        expect(mountedModal.find(".sps-modal").hasClass("sps-modal--success")).toEqual(true);
    });

    it("should create a warning modal", () => {
        props = {
            id: "test_modal",
            preset: "warning",
            children: "This is the body of warning modal."
        };
        mountedModal = mountModalComponent();
        expect(mountedModal.find(".sps-modal").hasClass("sps-modal--warning")).toEqual(true);
    });

    it("should create a tip modal", () => {
        props = {
            id: "test_modal",
            preset: "tip",
            children: "This is the body of tip modal."
        };
        mountedModal = mountModalComponent();
        expect(mountedModal.find(".sps-modal").hasClass("sps-modal--tip")).toEqual(true);
    });

    it("should create a info modal", () => {
        props = {
            id: "test_modal",
            preset: "info",
            children: "This is the body of info modal."
        };
        mountedModal = mountModalComponent();
        expect(mountedModal.find(".sps-modal").hasClass("sps-modal--info")).toEqual(true);
    });

    it("should create a delete modal", () => {
        props = {
            id: "test_modal",
            preset: "delete",
            children: "This is the body of delete modal."
        };
        mountedModal = mountModalComponent();
        expect(mountedModal.find(".sps-modal").hasClass("sps-modal--delete")).toEqual(true);
    });

    it("should open a modal", () => {
        props = {
            id: "test_modal",
            preset: "default",
            header: "This is the default title style",
            children: "This is the body of default modal."
        };
        mountedModal = mountModalComponent();
        const mockModalOpen = jest.fn(SpsModal, 'open').mockImplementation(() => {
            SpsModal.open(props.id);
        });
        mockModalOpen();
        expect(mockModalOpen).toHaveBeenCalled();
    });

    it("should close a modal", () => {
        props = {
            id: "test_modal",
            preset: "default",
            header: "This is the default title style",
            children: "This is the body of default modal."
        };
        mountedModal = mountModalComponent();
        SpsModal.open(props.id);
        const mockModalClose = jest.fn(SpsModal, 'close').mockImplementation(() => {
            SpsModal.close(props.id);
        });

        mockModalClose();
        expect(mockModalClose).toHaveBeenCalled();
    });

    it("should display a text footer", () => {
        props = {
            id: "test_modal",
            preset: "default",
            children: "This should have a text footer.",
            footer: "Here is a text footer"
        };
        mountedModal = mountModalComponent();
        expect(mountedModal.find(".sps-modal__footer").text()).toEqual(
            "Here is a text footer"
        );
    });

    it("should display custom html within a footer", () => {
        let renderFooter = () => {
            return (
                <h1>This is custom header</h1>
            );
        };
        props = {
            id: "test_modal",
            preset: "default",
            footer: renderFooter,
            children: "This is the modal body."
        };
        mountedModal = mountModalComponent();
        expect(mountedModal.find(".sps-modal__footer").length).toEqual(1);
        expect(
            mountedModal
                .find(".sps-modal__footer")
                .containsMatchingElement(renderFooter)
        ).toEqual(true);
    });

    it("should unmount", () => {
        props = {
            id: "test_modal",
            preset: "default",
            children: "This should have a text footer.",
            footer: "Here is a text footer"
        };

        mountedModal = mountModalComponent();
        const willUnmount = jest.fn(mountedModal.instance(), 'componentWillUnmount').mockImplementation(() => {
            mountedModal.instance().componentWillUnmount();
        });
        willUnmount();
        expect(willUnmount).toHaveBeenCalled();
    });
});
