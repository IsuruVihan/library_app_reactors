import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";
import {Edit, Trash2} from "react-feather";
import '../../assets/styles/partials/AuthorListLine.scss';

type AuthorListLineProps = {
    name: string,
    id: number,
    delete: (id: number) => void,
    updateRequest: (id: number) => void
};

const AuthorListLine: FC<AuthorListLineProps> = (props) => {
    return(
        <li>
            <Row>
                <Col xs={10}>{props.id}. {props.name}</Col>
                <Col><Edit className="edit-btn" onClick={() => props.updateRequest(props.id)} /></Col>
                <Col><Trash2 className="delete-btn" onClick={() => props.delete(props.id)} /></Col>
            </Row>
        </li>
    );
}

export default AuthorListLine;