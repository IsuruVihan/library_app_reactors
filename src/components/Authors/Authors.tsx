import React, {FC} from 'react';
import {Row, Col, Container} from "react-bootstrap";
import '../../assets/styles/partials/Authors.scss';
import AddAuthorForm from "./AddAuthorForm";
import { Plus, Trash2, Edit } from 'react-feather';

const Authors: FC = () => {
    return(
        <Container fluid>
            <Row className="Authors">
                <Col xs={12}>
                    <p className="title">Authors</p>
                </Col>
                {/*<Col xs={12}>*/}
                {/*    <p className="no-authors"><i>No authors listed here</i></p>*/}
                {/*</Col>*/}
                <Col xs={12}>
                    <ul className="author-list px-0">
                        <li>
                            <Row>
                                <Col xs={10}>1. Author 1</Col>
                                <Col><Edit className="edit-btn" /></Col>
                                <Col><Trash2 className="delete-btn" /></Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col xs={10}>2. Author 2</Col>
                                <Col><Edit className="edit-btn" /></Col>
                                <Col><Trash2 className="delete-btn" /></Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col xs={10}>3. Author 3</Col>
                                <Col><Edit className="edit-btn" /></Col>
                                <Col><Trash2 className="delete-btn" /></Col>
                            </Row>
                        </li>
                    </ul>
                </Col>
                <Col xs={12}>
                    <p className="add-author pt-3">
                        <Plus color="#034fa5" className="plus" />
                        <span className="add-author-text">
                            Add Author
                        </span>
                    </p>
                </Col>
                <Col xs={12}>
                    <AddAuthorForm />
                </Col>
            </Row>
        </Container>
    );
}

export default Authors;