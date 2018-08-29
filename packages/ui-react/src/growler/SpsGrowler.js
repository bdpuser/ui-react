import React, { Component, Fragment } from "react";
import { UnstyledIcon } from "../icon";
import renderType from "./renderType";
import EventManager from "../commercePlatform/vanilla/utils/EventManager/EventManager";
import classnames from "classnames";

export class SpsGrowlerArea extends Component {
  state = {
    growlerList: []
  };
  //TODO: Need to handle fade
  componentDidMount() {
    EventManager.on("GROWLER.SHOW", growler => {
      let growlers = this.state.growlerList.concat([growler]);
      this.setState({
        growlerList: growlers
      });
    });
    EventManager.on("GROWLER.HIDE", growler => {
      let growlerList = this.state.growlerList.filter(item => {
        return item.id !== growler.id;
      });
      this.setState({
        growlerList: growlerList
      });
    });
  }
  render() {
    return (
      <div className="sps-growler-area">
        {this.state.growlerList.map(growler => {
          return <SpsGrowler visible={true} key={growler.id} opts={growler} />;
        })}
      </div>
    );
  }
}

let fadeTimeout;

export class SpsGrowler extends Component {
  state = {
    iconClass: ""
  };

  onCloseHandler = () => {
    if (this.props.opts.onClose) {
      clearTimeout(fadeTimeout);
      this.props.opts.onClose(this.props.opts);
    }
    EventManager.emit("GROWLER.HIDE", this.props.opts);
  };

  render() {
    const { opts } = this.props;
    const iconClasses = {
      success: "sps-icon sps-icon-checkmark",
      error: "sps-icon sps-icon-exclamation-circle",
      warning: "sps-icon sps-icon-exclamation-triangle",
      info: "sps-icon sps-icon-info-circle",
      pending: "sps-spinner",
      default: "sps-icon sps-icon-info-circle"
    };
    const growlerClasses = classnames(`sps-growler sps-growler--${opts.preset} show`, {
        "fade": opts.fade
    });
    // TODO: There is likely a more elegant way to sync the fade animation
    // and the removal of the growler from the container
    // Timeout for CSS fade animation
    let fadeTimeoutDuration = opts.timeoutDuration / 1000 || '5';
    // Timeout for removing the growler from the growler area
    let removeTimeoutDuration = opts.timeoutDuration || '5000';
    let growlerIcon;
    let iconClass = iconClasses[opts.preset];
    if (opts.fade) {
        fadeTimeout = setTimeout(() => {
            this.onCloseHandler();
        }, removeTimeoutDuration);
    }
    if (opts.icon) {
      iconClass =
        opts.icon === "string" && iconClasses[opts.icon]
          ? iconClasses[opts.icon]
          : opts.icon;
      growlerIcon = renderType(opts.icon)
        ? renderType(opts.icon)
        : () => <UnstyledIcon className={iconClass} />;
    } else {
      growlerIcon = () => <UnstyledIcon className={iconClass} />;
    }

    return (
        <Fragment>
            <style>{`
                .sps-growler.show {
                    opacity: 1;
                }
                .sps-growler.show.fade {
                    opacity: 0;
                    animation-name: fadeOut;
                    animation-iteration-count: 1;
                    animation-timing-function: ease-in;
                    animation-duration: ${fadeTimeoutDuration}s;
                }

                @keyframes fadeOut {
                    0% {
                        opacity: 1;
                    }
                    95% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }
            `}
            </style>
      <div className={growlerClasses}>
        <div className="sps-growler__icon-box">{growlerIcon()}</div>
        <div className="sps-growler__message-box">
          <div className="sps-growler__message-box-text">
            <div className="sps-growler__message-box-title">{opts.title}</div>
            <div className="sps-growler__message-box-subtitle">{opts.msg}</div>
          </div>
          <button
            type="button"
            className="sps-growler__close-button"
            aria-label="Close panel"
            onClick={this.onCloseHandler}
          >
            <i
              className="sps-icon sps-icon-x"
              aria-hidden="true"
              title={`Close the ${opts.preset} message?`}
            />
          </button>
        </div>
      </div>
      </Fragment>
    );
  }
}
