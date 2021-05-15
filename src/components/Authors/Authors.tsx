import React, {FC, useEffect, useState} from 'react';
import {Row, Col, Container} from "react-bootstrap";
import '../../assets/styles/partials/Authors.scss';
import AddAuthorForm from "./AddAuthorForm";
import UpdateAuthorForm from "./UpdateAuthorForm";
import { Plus } from 'react-feather';
import IAuthor from '../../interfaces/IAuthor';
import AuthorListLine from "./AuthorListLine";
import NoAuthors from "./NoAuthors";

const Authors: FC = () => {
    // Author list number in the list (key)
    let authorId: number = 1;

    // Visibility of 'AddAuthor' form
    const [isVisibleAuthorForm, setIsVisibleAuthorForm] = useState<boolean>(false);
    // Visibility of 'UpdateAuthor' form
    const [isVisibleUpdateAuthorForm, setIsVisibleUpdateAuthorForm] = useState<boolean>(false);
    // Authors
    const [authorsList, setAuthorsList] = useState<IAuthor[]>([]);
    // Author to be update
    const [authorToBeUpdate, setAuthorToBeUpdate] = useState<number | null>(null);

    // Set 'AddAuthor' form visible
    const handleClickAddAuthorEvent = () => {
        setIsVisibleUpdateAuthorForm(false);
        setIsVisibleAuthorForm(true);
    }
    // Set 'AddAuthor' form invisible
    const handleClickCloseFormEvent = () => {
        setIsVisibleAuthorForm(false);
    }
    // Set 'UpdateAuthor' form invisible
    const handleClickCloseUpdateFormEvent = () => {
        setIsVisibleUpdateAuthorForm(false);
    }
    // Add an 'Author'
    const handleCreateAuthorEvent = (event: React.FormEvent, name: string) => {
        event.preventDefault();
        const newAuthor: IAuthor = { authorName: name };
        const authors = authorsList.slice();
        authors.push(newAuthor);
        setAuthorsList(authors);
        setIsVisibleAuthorForm(false);
    }
    // Delete an 'Author'
    const handleDeleteAuthorEvent = (id: number) => {
        const authors: IAuthor[] = authorsList.slice();
        authors.splice(id-1, 1);
        setAuthorsList(authors);
    }
    // Update an 'Author'
    const handleUpdateAuthorRequestEvent = (id: number) => {
        setIsVisibleAuthorForm(false);
        setIsVisibleUpdateAuthorForm(true);
        setAuthorToBeUpdate(id);
    }
    useEffect(() => {
        if(authorToBeUpdate === null) {
            return;
        }

        console.log(authorToBeUpdate);
    }, [authorToBeUpdate]);
    const handleUpdateAuthorEvent = (event: React.FormEvent, name: string) => {
        if(authorToBeUpdate === null) {
            return;
        }

        const authors = authorsList.slice();
        const newAuthor: IAuthor = {authorName: name};
        authors.splice(authorToBeUpdate-1, 1, newAuthor);
        setAuthorsList(authors);
        setAuthorToBeUpdate(null);
        setIsVisibleUpdateAuthorForm(false);
        event.preventDefault();
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
                                return(
                                    <AuthorListLine
                                        name={author.authorName}
                                        id={authorId++}
                                        key={authorId}
                                        delete={handleDeleteAuthorEvent}
                                        updateRequest={handleUpdateAuthorRequestEvent}
                                    />
                                );
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
                    {
                        isVisibleUpdateAuthorForm
                            &&
                        <UpdateAuthorForm
                            closeForm={handleClickCloseUpdateFormEvent}
                            updateAuthor={handleUpdateAuthorEvent}
                        />
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default Authors;