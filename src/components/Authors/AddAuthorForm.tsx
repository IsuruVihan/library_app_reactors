import React, {FC} from 'react';
import {Col, Container, Row, Button} from "react-bootstrap";
import '../../assets/styles/partials/AddAuthorForm.scss';
import { XCircle } from 'react-feather';

const AddAuthorForm: FC = () => {
    return(
        <Container className="aa-form-container" fluid={true}>
            <Row>
                <Col xs={9}>
                    <Row>
                        <Col className="ca-title" xs={11}><p className="ca-title-text">Create Author</p></Col>
                        <Col className="close-btn" xs={1}><XCircle className="close-icon" /></Col>
                    </Row>
                    <Row className="aa-form">
                        <Col xs={1} />
                        <Col xs={11}><label className="author-name-label">Name of Author</label></Col>
                        <Col xs={1} />
                        <Col xs={11}><input className="author-name-input" type="text" /></Col>
                        <Col xs={9} />
                        <Col xs={3} className="create-btn-container">
                            <Button variant="primary" size="sm" className="create-btn">
                                Create
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default AddAuthorForm;