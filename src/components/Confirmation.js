import React from 'react';

export default class Confirmation extends React.Component {
    render() {
        const {
            className = 'cofirm-modal',
            onConfirm = () => { },
            onCancel = () => { },
            show = false,
            title = 'Are you sure',
            message = 'Do you wanna proceed'
        } = this.props;
        return !show ?
            null :
            (
                <div className={className}>
                    <div className="modal-content">
                        <div className="modal-header">
                            {title}
                        </div>
                        <div className="modal-header">
                            {message}
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-sm btn-danger" onClick={(e) => onConfirm(e)} type="button"> Confirm </button>
                            <button className="btn btn-sm btn-white" onClick={(e) => onCancel(e)} type="button"> Cancel </button>
                        </div>
                    </div>
                </div>
            )
    }
}
