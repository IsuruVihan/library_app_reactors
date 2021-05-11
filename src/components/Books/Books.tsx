import React, {FC, useState} from 'react';
import {Row, Col, Container} from "react-bootstrap";
import '../../assets/styles/partials/Books.scss';
import AddBookForm from "./AddBookForm";
import { Plus, Trash2, Edit } from 'react-feather';

const Books: FC = () => {
    // Visibility of 'AddBook' form
    const [isVisibleBookForm, setIsVisibleBookForm] = useState<boolean>(false);

    // Set 'AddBook' form visible
    const handleClickAddBookEvent = () => {
        setIsVisibleBookForm(true);
    }
    // Set 'AddBook' form invisible
    const handleClickCloseFormEvent = () => {
        setIsVisibleBookForm(false);
    }

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
                        <Plus color="#034fa5" className="plus" onClick={() => handleClickAddBookEvent()} />
                        <span className="add-book-text" onClick={() => handleClickAddBookEvent()} >
                            Add Book
                        </span>
                    </p>
                </Col>
                <Col xs={12}>
                    {isVisibleBookForm && <AddBookForm closeForm={handleClickCloseFormEvent} />}
                </Col>
            </Row>
        </Container>
    );
}

export default Books;