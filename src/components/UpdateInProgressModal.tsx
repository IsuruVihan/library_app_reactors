import React, {FC} from 'react';
import {Modal} from "react-bootstrap";

type UpdateInProgressModalProps = {
    isVisible: boolean,
    closeModal: () => void
};

const UpdateInProgressModal: FC<UpdateInProgressModalProps> = (props) => {
    return (
        <Modal
            show={props.isVisible}
            onHide={() => props.closeModal()}
            keyboard={true}
            className="main-container"
        >
            <Modal.Header>
                <Modal.Title>Update in progress</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Please complete the current update process to continue
            </Modal.Body>
        </Modal>
    );
}

export default UpdateInProgressModal;