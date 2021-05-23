import React, {FC} from 'react';
import {Modal} from "react-bootstrap";

type CreateInProgressModalProps = {
    isVisible: boolean,
    closeModal: () => void
};

const CreateInProgressModal: FC<CreateInProgressModalProps> = (props) => {
    return (
        <Modal
            show={props.isVisible}
            onHide={() => props.closeModal()}
            keyboard={true}
            className="main-container"
        >
            <Modal.Header>
                <Modal.Title>Create in progress</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Please complete the current create process to continue
            </Modal.Body>
        </Modal>
    );
}

export default CreateInProgressModal;