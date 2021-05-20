import React, {FC, useState} from 'react';
import {Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import {Edit, Trash2} from "react-feather";
import '../../assets/styles/partials/AuthorListLine.scss';
import DeleteAuthorModal from "./DeleteAuthorModal";

type AuthorListLineProps = {
    name: string,
    id: number,
    delete: (id: number) => void,
    updateRequest: (id: number) => void
};

const AuthorListLine: FC<AuthorListLineProps> = (props) => {
    // Visibility of delete author modal
    const [showDeleteAuthorModal, setShowDeleteAuthorModal] = useState<boolean>(false);

    // Display delete author modal
    const openDeleteAuthorModal = () => {
        setShowDeleteAuthorModal(true);
    }
    // When click 'Close'
    const refuseDeleteAuthorAction = () => {
        setShowDeleteAuthorModal(false);
    }
    // When click 'Yes, Delete'
    const acceptDeleteAuthorAction = () => {
        props.delete(props.id);
        setShowDeleteAuthorModal(false);
    }
    const showEditOverlay = (props:any) => (
        <Tooltip id="button-tooltip" {...props}>
            Edit author name
        </Tooltip>
    );
    const showDeleteOverlay = (props:any) => (
        <Tooltip id="button-tooltip" {...props}>
            Delete author name
        </Tooltip>
    );
    return(
        <li>
            <Row>
                <Col className="AddedAuthor" xs={8}>{props.id}. {props.name}</Col>
                <Col xs={2}>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 400 }}
                        overlay={showEditOverlay}
                    >
                        <Edit className="edit-btn" onClick={() => props.updateRequest(props.id)} />
                    </OverlayTrigger>
                </Col>
                <Col xs={2}>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={showDeleteOverlay}
                    >
                        <Trash2 className="delete-btn" onClick={() => openDeleteAuthorModal()} />
                    </OverlayTrigger>
                    </Col>
            </Row>
            <DeleteAuthorModal
                authorToDelete={props.name}
                isVisible={showDeleteAuthorModal}
                closeModal={refuseDeleteAuthorAction}
                acceptDeleteAction={acceptDeleteAuthorAction}
            />
        </li>
    );
}

export default AuthorListLine;