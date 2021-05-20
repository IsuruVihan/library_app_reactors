import React, {FC, useState} from 'react';
import {Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import {Edit, Trash2} from "react-feather";
import '../../assets/styles/partials/BookListLine.scss';
import DeleteBookModal from "./DeleteBookModal";

type BookListLineProps = {
    title: string,
    isbn: string,
    author: string,
    id: number,
    delete: (id: number) => void,
    updateRequest: (id: number) => void
};

const BookListLine: FC<BookListLineProps> = (props) => {
    // Visibility of delete book modal
    const [showDeleteBookModal, setShowDeleteBookModal] = useState<boolean>(false);

    // Display delete book modal
    const openDeleteBookModal = () => {
        setShowDeleteBookModal(true);
    }
    // When click 'Close'
    const refuseDeleteBookAction = () => {
        setShowDeleteBookModal(false);
    }
    // When click 'Yes, Delete'
    const acceptDeleteBookAction = () => {
        props.delete(props.id);
        setShowDeleteBookModal(false);
    }
    const showEditOverlay = (props:any) => (
        <Tooltip id="button-tooltip" {...props}>
            Edit book details
        </Tooltip>
    );
    const showDeleteOverlay = (props:any) => (
        <Tooltip id="button-tooltip" {...props}>
            Delete book
        </Tooltip>
    );
    return(
        <li>
            <Row>
                <Col className="AddedBook" xs={8}>{props.id}. {props.title}</Col>
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
                        <Trash2 className="delete-btn" onClick={() => openDeleteBookModal()} />
                    </OverlayTrigger>
                </Col>
            </Row>
            <DeleteBookModal
                bookToDelete={props.title}
                isVisible={showDeleteBookModal}
                closeModal={refuseDeleteBookAction}
                acceptDeleteAction={acceptDeleteBookAction}
            />
        </li>
    );
}

export default BookListLine;