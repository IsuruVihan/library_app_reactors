import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";
import {Edit, Trash2} from "react-feather";
import '../../assets/styles/partials/AuthorListLine.scss';

type BookListLineProps = {
    title: string,
    isbn:string,
    authorname:string,
    id: number,
    delete: (id: number) => void,
};

const BookListLine: FC<BookListLineProps> = (props) => {
    return(
        <li>
            <Row>
                <Col xs={10}>{props.id}. {props.title}</Col>
                <Col><Edit className="edit-btn" /></Col>
                <Col><Trash2 className="delete-btn" onClick={() => props.delete(props.id)} /></Col>
            </Row>
        </li>
    );
}

export default BookListLine;