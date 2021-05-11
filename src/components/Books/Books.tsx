import React, {FC} from 'react';
import {Row, Col, Container} from "react-bootstrap";
import '../../assets/styles/partials/Books.scss';
import AddBookForm from "./AddBookForm";
import { Plus, Trash2, Edit } from 'react-feather';

const Books: FC = () => {
    return(
        <Container fluid>
            <Row className="Books">
                <Col xs={12}>
                    <p className="title">Books</p>
                </Col>
                {/*<Col xs={12}>*/}
                {/*    <p className="no-books"><i>No books listed here</i></p>*/}
                {/*</Col>*/}
                <Col xs={12}>
                    <ul className="book-list px-0">
                        <li>
                            <Row>
                                <Col xs={10}>1. Book 1 title</Col>
                                <Col><Edit className="edit-btn" /></Col>
                                <Col><Trash2 className="delete-btn" /></Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col xs={10}>2. Book 2 title</Col>
                                <Col><Edit className="edit-btn" /></Col>
                                <Col><Trash2 className="delete-btn" /></Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col xs={10}>3. Book 3 title</Col>
                                <Col><Edit className="edit-btn" /></Col>
                                <Col><Trash2 className="delete-btn" /></Col>
                            </Row>
                        </li>
                    </ul>
                </Col>
                <Col xs={12}>
                    <p className="add-book pt-3">
                        <Plus color="#034fa5" className="plus" />
                        <span className="add-book-text">
                            Add Book
                        </span>
                    </p>
                </Col>
                <Col xs={12}>
                    <AddBookForm />
                </Col>
            </Row>




            {/*<Col className="Books px-5">*/}
            {/*    <p className="title">Books</p>*/}
            {/*    /!*<span className="no-books"><i>No books listed here</i></span>*!/*/}
            {/*    <ul className="book-list px-0">*/}
            {/*        <li>*/}
            {/*            <Row>*/}
            {/*                <Col xs={10}>1. Book 1 title</Col>*/}
            {/*                <Col><Edit className="edit-btn" /></Col>*/}
            {/*                <Col><Trash2 className="delete-btn" /></Col>*/}
            {/*            </Row>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Row>*/}
            {/*                <Col xs={10}>2. Book 2 title</Col>*/}
            {/*                <Col><Edit className="edit-btn" /></Col>*/}
            {/*                <Col><Trash2 className="delete-btn" /></Col>*/}
            {/*            </Row>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Row>*/}
            {/*                <Col xs={10}>3. Book 3 title</Col>*/}
            {/*                <Col><Edit className="edit-btn" /></Col>*/}
            {/*                <Col><Trash2 className="delete-btn" /></Col>*/}
            {/*            </Row>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*    <p className="add-book pt-3">*/}
            {/*        <Plus color="#034fa5" className="plus" />*/}
            {/*        <span className="add-book-text">*/}
            {/*            Add Book*/}
            {/*        </span>*/}
            {/*    </p>*/}
            {/*    <div>*/}
            {/*        <AddBookForm />*/}
            {/*    </div>*/}
            {/*</Col>*/}
        </Container>
    );
}

export default Books;