import React, { Component } from "react";
import classnames from "classnames";

class SpsModalHeader extends Component {
    render() {
        const { header, className } = this.props;
        const headerClass = classnames("sps-modal__header", className);
        const modalHeader =
            typeof header === "function"
                ? header
                : () => {
                    return <h6 className="sps-modal__title">{header}</h6>;
                };  
        return (
            <div className={headerClass}>{modalHeader()}</div>
        );
    }
}

class SpsModalBody extends Component {
    render() {
        const { body, className } = this.props;
        const bodyClass = classnames("sps-modal__body", className);
        return (
            <div className={bodyClass}>{body}</div>
        );
    }
}

class SpsModalFooter extends Component {
    render() {
        const { footer, className } = this.props;
        const footerClass = classnames("sps-modal__footer", className);
        const modalFooter = typeof footer === "function" ? footer : () => footer;
        return (
            <div className={footerClass}>{modalFooter()}</div>
        );
    }
}

export class SpsModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false
        };
    }

    open = () => {
        this.setState({ isOpen: true });
        document.body.classList.add('modal-open');
        let overlay = document.createElement('div');
        overlay.id = "modal_overlay_"+ this.props.id;
        overlay.setAttribute('class', 'modal-backdrop show');
        document.body.appendChild(overlay);
    }

    close = () => {
        this.setState({ isOpen: false });
        document.body.classList.remove('modal-open');
        let overlay = document.getElementById('modal_overlay_'+ this.props.id);
        overlay.remove(); 
    }

    componentDidMount() {
        this.element.addEventListener('mousedown', this.handleOutsideClick, false);
    }

    handleOutsideClick = (e) => {
        if(this.element.contains(e.target) && e.target.classList.contains('sps-modal')) {
            if(this.props.backdrop !== 'static') {
                this.close();
            }
        }
    }

    componentWillUnmount() {
        this.element.removeEventListener('mousedown', this.handleOutsideClick, false);
    }

    render() {
        const modalTypes = {
            default: "sps-modal--default",
            success: "sps-modal--success",
            delete: "sps-modal--delete",
            key: "sps-modal--key",
            info: "sps-modal--info",
            tip: "sps-modal--tip",
            warning: "sps-modal--warning"
        };

        const modalSizes = {
            small: "sps-modal__dialog--small",
            large: "sps-modal__dialog--large",
        }
        
        const show = {
            display: 'block',
            paddingRight: '17px'
        }

        const hide = {
            display: 'none'
        }

        const { id, size, backdrop, header, footer, preset, children, className, ...rest } = this.props;
        let modalClass, modalDialogClass;

        if (!preset) {
            throw new Error("Preset is a required field");
        }

        if (!id) {
            throw new Error("Id is a required field");
        } 

        if (!modalTypes[preset]) {
            throw new Error("Invalid preset");
        }

        modalClass = classnames("sps-modal", className, modalTypes[preset]);
        modalDialogClass = classnames("sps-modal__dialog", modalSizes[size]);
        return (
            <div className={modalClass} {...rest} style={this.state.isOpen? show : hide} ref={el => this.element = el}>
                <div className={modalDialogClass} role="document">
                    <div className="sps-modal__content">
                        {header ? (
                            <SpsModalHeader header={header} />
                        ) : null}

                        {children ? (
                            <SpsModalBody body={children} />
                        ) : null}

                        {footer ? (
                            <SpsModalFooter footer={footer} />
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default SpsModal;