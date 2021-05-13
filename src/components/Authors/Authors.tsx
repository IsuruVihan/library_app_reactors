import React, {FC, useState} from 'react';
import {Row, Col, Container} from "react-bootstrap";
import '../../assets/styles/partials/Authors.scss';
import AddAuthorForm from "./AddAuthorForm";
import { Plus } from 'react-feather';
import IAuthor from '../../interfaces/IAuthor';
import AuthorListLine from "./AuthorListLine";
import NoAuthors from "./NoAuthors";

const Authors: FC = () => {
    let authorId: number = 1;

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
    const handleCreateAuthorEvent = (event: React.FormEvent, name: string) => {
        const newAuthor: IAuthor = { authorName: name };
        const authors = authorsList.slice();
        authors.push(newAuthor);
        setAuthorsList(authors);
        event.preventDefault();
        console.log(authorsList);
    }

    return(
        <Container fluid>
            <Row className="Authors">
                <Col xs={12}>
                    <p className="title">Authors</p>
                </Col>
                {(authorsList.length === 0) && <NoAuthors />}
                <Col xs={12}>
                    <ul className="author-list px-0">
                        {authorsList.map(
                            (author: IAuthor) => {
                                return <AuthorListLine name={author.authorName} id={authorId++} key={authorId} />
                            }
                        )}
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