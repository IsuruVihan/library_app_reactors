import React, {FC, useState} from 'react';
import {Col, Row} from "react-bootstrap";
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

    return(
        <li>
            <Row>
                <Col xs={10}>{props.id}. {props.name}</Col>
                <Col><Edit className="edit-btn" onClick={() => props.updateRequest(props.id)} /></Col>
                <Col><Trash2 className="delete-btn" onClick={() => openDeleteAuthorModal()} /></Col>
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