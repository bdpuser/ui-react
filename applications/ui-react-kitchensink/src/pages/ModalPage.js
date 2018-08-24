import React, { Component, Fragment } from "react";
import { SpsCard, SpsButton, SpsModal } from "@spscommerce/ui-react";
import { SpsLiveExample, SpsExample } from "../Example";
import { H1, H2 } from "../Headings";

export default class ModalPage extends Component {
  render() {
    return (
      <Fragment>
        <SpsCard>
          <H1>Modal</H1>
          <H2>Default, Small, Large, Success, Warning, Info, Delete, Tip</H2>
          <SpsExample>
            <div className="container">
              <SpsButton preset="default" message="Default Modal" onClick={SpsModal.open('sps_default_modal')}/>&nbsp;
              <SpsButton preset="default" message="Small Modal" onClick={SpsModal.open('sps_default_small_modal')}/>&nbsp;
              <SpsButton preset="default" message="Large Modal" onClick={SpsModal.open('sps_default_large_modal')}/>&nbsp;
            </div>
            <br />
            <div className="container">
              <SpsButton preset="default" message="Success Modal" onClick={SpsModal.open('sps_success_modal')}/>&nbsp;
              <SpsButton preset="default" message="Warning Modal" onClick={SpsModal.open('sps_warning_modal')}/>&nbsp;
              <SpsButton preset="default" message="Info Modal" onClick={SpsModal.open('sps_info_modal')}/>&nbsp;
              <SpsButton preset="default" message="Delete Modal" onClick={SpsModal.open('sps_delete_modal')}/>&nbsp;
              <SpsButton preset="default" message="Tip Modal" onClick={SpsModal.open('sps_tip_modal')}/>&nbsp;
            </div>

            <SpsModal id="sps_default_modal" preset="default" header="This is the default title style" footer={() => (
              <>
                <SpsButton preset="key" message="Ok" onClick={SpsModal.close('sps_default_modal')}/>
                <SpsButton preset="default" message="Cancel" onClick={SpsModal.close('sps_default_modal')}/>
              </>
            )}>
              This is the body of default modal.
                </SpsModal>

            <SpsModal id="sps_default_small_modal" size="small" preset="default" header="This is the default title style" footer={() => (
              <>
                <SpsButton preset="key" message="Ok" onClick={SpsModal.close('sps_default_small_modal')}/>
                <SpsButton preset="default" message="Cancel" onClick={SpsModal.close('sps_default_small_modal')}/>
              </>
            )}>
              This is the body of small modal.
                </SpsModal>

            <SpsModal id="sps_default_large_modal" size="large" preset="default" header="This is the default title style" footer={() => (
              <>
                <SpsButton preset="key" message="Ok" onClick={SpsModal.close('sps_default_large_modal')}/>
                <SpsButton preset="default" message="Cancel" onClick={SpsModal.close('sps_default_large_modal')}/>
              </>
            )}>
              This is the body of large modal.
                </SpsModal>

            <SpsModal id="sps_success_modal" size="small" preset="success" header="This is the default title style" footer={() => (
              <>
                <SpsButton preset="key" message="Save" onClick={SpsModal.close('sps_success_modal')}/>
                <SpsButton preset="default" message="Cancel" onClick={SpsModal.close('sps_success_modal')}/>
              </>
            )}>
              This is the body of success modal.
                </SpsModal>

            <SpsModal id="sps_warning_modal" preset="warning" header="This is the default title style" footer={() => (
              <>
                <SpsButton preset="confirm" message="I've been warned" onClick={SpsModal.close('sps_warning_modal')}/>
                <SpsButton preset="default" message="Cancel" onClick={SpsModal.close('sps_warning_modal')}/>
              </>
            )}>
              This is the body of warning modal.
                </SpsModal>

            <SpsModal id="sps_info_modal" preset="info" header="This is the default title style" footer={() => (
              <>
                <SpsButton preset="icon" message="Thanks!" onClick={SpsModal.close('sps_info_modal')}/>
                <SpsButton preset="default" message="Cancel" onClick={SpsModal.close('sps_info_modal')}/>
              </>
            )}>
              This is the body of info modal.
                </SpsModal>

            <SpsModal id="sps_delete_modal" preset="delete" header="This is the default title style" footer={() => (
              <>
                <SpsButton preset="delete" message="Delete" onClick={SpsModal.close('sps_delete_modal')}/>
                <SpsButton preset="default" message="Cancel" onClick={SpsModal.close('sps_delete_modal')}/>
              </>
            )}>
              This is the body of delete modal.
                </SpsModal>

            <SpsModal id="sps_tip_modal" preset="tip" header="This is the default title style" footer={() => (
              <>
                <SpsButton preset="confirm" message="Sleep" onClick={SpsModal.close('sps_tip_modal')}/>
                <SpsButton preset="default" message="Cancel" onClick={SpsModal.close('sps_tip_modal')}/>
              </>
            )}>
              This is the body of tip modal.
                </SpsModal>
          </SpsExample>
        </SpsCard>
      </Fragment>
    );
  }
}
