import React, {FC} from 'react';
import {Col, Container, Row, Button} from "react-bootstrap";
import '../../assets/styles/partials/AddBookForm.scss';
import { XCircle } from 'react-feather';

const AddBookForm: FC = () => {
    return(
        <Container className="ab-form-container" fluid={true}>
            <Row>
                <Col xs={9}>
                    <Row>
                        <Col className="cb-title" xs={11}><p className="cb-title-text">Create Book</p></Col>
                        <Col className="close-btn" xs={1}><XCircle className="close-icon" /></Col>
                    </Row>
                    <Row className="ab-form">
                        <Col xs={1} />
                        <Col xs={11}><label className="book-title-label">Title of the Book</label></Col>
                        <Col xs={1} />
                        <Col xs={11}><input className="book-title-input" type="text" /></Col>
                        <Col xs={1} />
                        <Col xs={11}><label className="book-isbn-label">ISBN</label></Col>
                        <Col xs={1} />
                        <Col xs={11}><input className="book-isbn-input" type="text" /></Col>
                        <Col xs={1} />
                        <Col xs={11}><label className="book-author-label">Author</label></Col>
                        <Col xs={1} />
                        <Col xs={11}>
                            <select className="book-author-input">
                                <option>Author 1</option>
                                <option>Author 2</option>
                                <option>Author 3</option>
                            </select>
                        </Col>
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

export default AddBookForm;