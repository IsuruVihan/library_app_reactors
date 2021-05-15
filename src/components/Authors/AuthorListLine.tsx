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
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Simple tooltip
        </Tooltip>
    );
    return(
        <li>
            <Row>
                <Col xs={10}>{props.id}. {props.name}</Col>
                <Col>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}>
                        <Edit className="edit-btn" onClick={() => props.updateRequest(props.id)} />
                    </OverlayTrigger>
                </Col>
                <Col>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}>
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