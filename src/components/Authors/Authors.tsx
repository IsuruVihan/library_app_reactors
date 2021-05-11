import React, {FC, useState} from 'react';
import {Row, Col, Container} from "react-bootstrap";
import '../../assets/styles/partials/Authors.scss';
import AddAuthorForm from "./AddAuthorForm";
import { Plus, Trash2, Edit } from 'react-feather';
import IAuthor from '../../interfaces/IAuthor';

const Authors: FC = () => {
    // Visibility of 'AddAuthor' form
    const [isVisibleAuthorForm, setIsVisibleAuthorForm] = useState<boolean>(false);
    // Authors
    const [authorsList, setAuthorsList] = useState<IAuthor[]>([]);

    // Set 'AddAuthor' form visible
    const handleClickAddAuthorEvent = () => {
        setIsVisibleAuthorForm(true);
    }
    // Set 'AddAuthor' form invisible
    const handleClickCloseFormEvent = () => {
        setIsVisibleAuthorForm(false);
    }
    // Add an 'Author'
    const handleCreateAuthorEvent = (name: string) => {
        const newAuthor: IAuthor = { authorName: name };
        const authors = authorsList.slice();
        authors.push(newAuthor);
        setAuthorsList(authors);
        console.log(authorsList);
    }

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
                        <Plus color="#034fa5" className="plus" onClick={() => handleClickAddAuthorEvent()} />
                        <span className="add-author-text" onClick={() => handleClickAddAuthorEvent()} >
                            Add Author
                        </span>
                    </p>
                </Col>
                <Col xs={12}>
                    {
                        isVisibleAuthorForm
                            &&
                        <AddAuthorForm
                            closeForm={handleClickCloseFormEvent}
                            createAuthor={handleCreateAuthorEvent}
                        />
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default Authors;