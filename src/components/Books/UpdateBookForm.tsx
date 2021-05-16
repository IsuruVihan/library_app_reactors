import React, {FC, useState} from 'react';
import {Col, Container, Row, Button, Form} from "react-bootstrap";
import '../../assets/styles/partials/UpdateBookForm.scss';
import { XCircle } from 'react-feather';
import IAuthor from "../../interfaces/IAuthor";

type UpdateBookFormProps = {
    closeForm: () => void,
    updateBook: (event: React.FormEvent, title: string, isbn: string, author: string) => void,
    authors: () => IAuthor[]
};

const UpdateBookForm: FC<UpdateBookFormProps> = (props) => {
    // Book title
    const [enteredTitle, setEnteredTitle] = useState<string>("");
    // Book ISBN
    const [enteredIsbn, setEnteredIsbn] = useState<string>("");
    // Book Author
    const [enteredAuthor, setEnteredAuthor] = useState<string>("");

    // Handling changes of book author field
    const handleEnterAuthorChangeEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const authorName = event.target.value;
        setEnteredAuthor(authorName);
    }
    // Handling changes of book isbn field
    const handleEnterIsbnChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isbn = event.target.value;
        setEnteredIsbn(isbn);
    }
    // Handling changes of book isbn field
    const handleEnterTitleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const title = event.target.value;
        setEnteredTitle(title);
    }
    // submit update book form
    const submitUpdateBookForm = (event: React.FormEvent) => {
        event.preventDefault();
        if(enteredTitle === "" || enteredIsbn === "") {
            return;
        }

        const bookTitleToBeUpdated = enteredTitle;
        const bookIsbnToBeUpdated = enteredIsbn;
        const bookAuthorToBeUpdated = enteredAuthor;
        setEnteredTitle("");
        setEnteredIsbn("");
        setEnteredAuthor("");
        return props.updateBook(event, bookTitleToBeUpdated, bookIsbnToBeUpdated, bookAuthorToBeUpdated);
    }

    return(
        <Container className="ub-form-container" fluid={true}>
            <Row>
                <Col xs={9}>
                    <Row>
                        <Col className="ub-title" xs={11}><p className="ub-title-text">Update Book</p></Col>
                        <Col className="close-btn" xs={1}><XCircle className="close-icon" /></Col>
                    </Row>
                </Col>
                <Col xs={3} />
                <Col xs={1} />
                <Col xs={9}>
                    <Form className="ub-form"  onSubmit={(event: React.FormEvent) => submitUpdateBookForm(event)}>
                        <Form.Group>
                            <Form.Label className="book-title-label">Title of the Book</Form.Label>
                            <Form.Control
                                className="book-title-input"
                                type="text"
                                size="sm"
                                value={enteredTitle}
                                onChange={
                                    (event: React.ChangeEvent<HTMLInputElement>) =>
                                        handleEnterTitleChangeEvent(event)
                                }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="book-isbn-label">ISBN</Form.Label>
                            <Form.Control
                                className="book-isbn-input"
                                type="text"
                                size="sm"
                                value={enteredIsbn}
                                onChange={
                                    (event: React.ChangeEvent<HTMLInputElement>) =>
                                        handleEnterIsbnChangeEvent(event)
                                }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="book-author-label">Author</Form.Label>
                            <Form.Control
                                className="book-author-input"
                                size="sm"
                                as="select"
                                onChange={
                                    (event: React.ChangeEvent<HTMLSelectElement>) =>
                                        handleEnterAuthorChangeEvent(event)
                                }
                            >
                                {props.authors().map(
                                    (author: IAuthor) => {
                                        return(
                                            <option
                                                value={author.authorName}
                                                key={author.authorName}
                                            >
                                                {author.authorName}
                                            </option>
                                        );
                                    }
                                )}
                                {/*<option value="Author 1">Author 1</option>*/}
                                {/*<option value="Author 2">Author 2</option>*/}
                                {/*<option value="Author 3">Author 3</option>*/}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="update-btn-container">
                            <Button className="update-btn" variant="primary" type="submit" size="sm" >
                                Update
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default UpdateBookForm;