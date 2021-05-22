import React, {FC, useState} from 'react';
import {Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import {Edit, Trash2} from "react-feather";
import '../../assets/styles/partials/AuthorListLine.scss';
// import DeleteAuthorModal from "./DeleteAuthorModal";

type BooksListLineProps = {
    title: string,
    isbn: string,
    id: number
    // delete: (id: number) => void,
    // updateRequest: (id: number) => void
};

const BooksListLine: FC<BooksListLineProps> = (props) => {
    // Visibility of delete author modal
    // const [showDeleteAuthorModal, setShowDeleteAuthorModal] = useState<boolean>(false);
    //
    // // Display delete author modal
    // const openDeleteAuthorModal = () => {
    //     setShowDeleteAuthorModal(true);
    // }
    // // When click 'Close'
    // const refuseDeleteAuthorAction = () => {
    //     setShowDeleteAuthorModal(false);
    // }
    // // When click 'Yes, Delete'
    // const acceptDeleteAuthorAction = () => {
    //     props.delete(props.id);
    //     setShowDeleteAuthorModal(false);
    // }
    const showEditOverlay = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Edit book
        </Tooltip>
    );
    const showDeleteOverlay = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Delete book
        </Tooltip>
    );
    return(
        <li>
            <Row>
                <Col xs={10}>{props.id}. {props.title} - {props.isbn}</Col>
                <Col>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 400 }}
                        overlay={showEditOverlay}>
                        <Edit className="edit-btn" onClick={() => null} />
                    </OverlayTrigger>
                </Col>
                <Col>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={showDeleteOverlay}>
                        <Trash2 className="delete-btn" onClick={() => null} />
                    </OverlayTrigger>
                    </Col>
            </Row>
            {/*<DeleteAuthorModal*/}
            {/*    authorToDelete={props.name}*/}
            {/*    isVisible={showDeleteAuthorModal}*/}
            {/*    closeModal={refuseDeleteAuthorAction}*/}
            {/*    acceptDeleteAction={acceptDeleteAuthorAction}*/}
            {/*/>*/}
        </li>
    );
}

export default BooksListLine;