import React, { Component, Fragment } from "react";
import { SpsCard, SpsButton, SpsModal } from "@spscommerce/ui-react";
import { SpsExample } from "../Example";
import { H1, H2 } from "../Headings";

export default class ModalPage extends Component {
  constructor(props) {
    super(props);
    this.modals = new Map();
  }

  showModal = (key) => {
    this.modals.get(key).open();
  }

  hideModal = (key) => {
    this.modals.get(key).close();
  }

  render() {
    return (
      <Fragment>
        <SpsCard>
          <H1>Modal</H1>
          <H2>Default, Small, Large, Success, Warning, Info, Delete, Tip</H2>
          <SpsExample>
            <SpsCard>
              <SpsModal ref={ref => this.modals.set('default', ref)} id="sps_default_modal" preset="default" header="This is the default title style" footer={() => (
                <>
                  <SpsButton preset="default" message="Cancel" onClick={() => this.hideModal('default')} />
                  <SpsButton preset="key" message="Ok" onClick={() => this.hideModal('default')} />
                </>
              )}>
                This is the body of default modal.
                </SpsModal>

              <SpsModal ref={ref => this.modals.set('small', ref)} id="sps_default_small_modal" backdrop="static" size="small" preset="default" header="This is the default title style" footer={() => (
                <>
                  <SpsButton preset="default" message="Cancel" onClick={() => this.hideModal('small')} />
                  <SpsButton preset="key" message="Ok" onClick={() => this.hideModal('small')} />
                </>
              )}>
                This is the body of small modal.
                </SpsModal>

              <SpsModal ref={ref => this.modals.set('large', ref)} id="sps_default_large_modal" size="large" preset="default" header="This is the default title style" footer={() => (
                <>
                  <SpsButton preset="default" message="Cancel" onClick={() => this.hideModal('large')} />
                  <SpsButton preset="key" message="Ok" onClick={() => this.hideModal('large')} />
                </>
              )}>
                This is the body of large modal.
                </SpsModal>

              <SpsModal ref={ref => this.modals.set('success', ref)} id="sps_success_modal" size="small" preset="success" header="This is the default title style" footer={() => (
                <>
                  <SpsButton preset="default" message="Cancel" onClick={() => this.hideModal('success')} />
                  <SpsButton preset="key" message="Save" onClick={() => this.hideModal('success')} />
                </>
              )}>
                This is the body of success modal.
                </SpsModal>

              <SpsModal ref={ref => this.modals.set('warning', ref)} id="sps_warning_modal" preset="warning" header="This is the default title style" footer={() => (
                <>
                  <SpsButton preset="default" message="Cancel" onClick={() => this.hideModal('warning')} />
                  <SpsButton preset="confirm" message="I've been warned" onClick={() => this.hideModal('warning')} />
                </>
              )}>
                This is the body of warning modal.
                </SpsModal>

              <SpsModal ref={ref => this.modals.set('info', ref)} id="sps_info_modal" preset="info" header="This is the default title style" footer={() => (
                <>
                  <SpsButton preset="default" message="Cancel" onClick={() => this.hideModal('info')} />
                  <SpsButton preset="icon" message="Thanks!" onClick={() => this.hideModal('info')} />
                </>
              )}>
                This is the body of info modal.
                </SpsModal>

              <SpsModal ref={ref => this.modals.set('delete', ref)} id="sps_delete_modal" preset="delete" header="This is the default title style" footer={() => (
                <>
                  <SpsButton preset="default" message="Cancel" onClick={() => this.hideModal('delete')} />
                  <SpsButton preset="delete" message="Delete" onClick={() => this.hideModal('delete')} />
                </>
              )}>
                This is the body of delete modal.
                </SpsModal>

              <SpsModal ref={ref => this.modals.set('tip', ref)} id="sps_tip_modal" preset="tip" header="This is the default title style" footer={() => (
                <>
                  <SpsButton preset="default" message="Cancel" onClick={() => this.hideModal('tip')} />
                  <SpsButton preset="confirm" message="Sleep" onClick={() => this.hideModal('tip')} />
                </>
              )}>
                This is the body of tip modal.
                </SpsModal>

              <div className="container">
                <SpsButton preset="default" message="Default Modal" onClick={() => this.showModal('default')} />{' '}
                <SpsButton preset="default" message="Small Modal" onClick={() => this.showModal('small')} />{' '}
                <SpsButton preset="default" message="Large Modal" onClick={() => this.showModal('large')} />{' '}
              </div>
              <br />
              <div className="container">
                <SpsButton preset="default" message="Success Modal" onClick={() => this.showModal('success')} />{' '}
                <SpsButton preset="default" message="Warning Modal" onClick={() => this.showModal('warning')} />{' '}
                <SpsButton preset="default" message="Info Modal" onClick={() => this.showModal('info')} />{' '}
                <SpsButton preset="default" message="Delete Modal" onClick={() => this.showModal('delete')} />{' '}
                <SpsButton preset="default" message="Tip Modal" onClick={() => this.showModal('tip')} />{' '}
              </div>
            </SpsCard>

          </SpsExample>
        </SpsCard>
      </Fragment>
    );
  }
}
