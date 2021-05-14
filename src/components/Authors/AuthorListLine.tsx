import React, {FC} from 'react';
import {Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import {Edit, Trash2} from "react-feather";
import '../../assets/styles/partials/AuthorListLine.scss';

type AuthorListLineProps = {
    name: string,
    id: number,
    delete: (id: number) => void,
    updateRequest: (id: number) => void
};

const AuthorListLine: FC<AuthorListLineProps> = (props) => {
    const showEditOverlay = () => (
        <Tooltip id="button-tooltip">
            Edit author name
        </Tooltip>
    );

    return(
        <li>
            <Row>
                <Col xs={10}>
                    {props.id}. {props.name}
                </Col>
                <Col>
                    <OverlayTrigger
                        trigger="hover"
                        key="right"
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={showEditOverlay}
                    >
                        <Edit className="edit-btn" onClick={() => props.updateRequest(props.id)} />
                    </OverlayTrigger>
                </Col>
                <Col>
                    <Trash2 className="delete-btn" onClick={() => props.delete(props.id)} />
                </Col>
            </Row>
        </li>
    );
}

export default AuthorListLine;