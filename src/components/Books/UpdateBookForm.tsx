import React, {FC, useState} from 'react';
import {Col, Container, Row, Button, Form} from "react-bootstrap";
import '../../assets/styles/partials/UpdateBookForm.scss';
import { XCircle } from 'react-feather';
import IAuthor from "../../interfaces/IAuthor";

type UpdateBookFormProps = {
    closeForm: () => void,
    updateBook: (event: React.FormEvent, title: string, isbn: string, author: string) => void,
    authors: () => IAuthor[],
    currentTitle: string,
    currentIsbn: string,
    currentAuthor: string
};

const UpdateBookForm: FC<UpdateBookFormProps> = (props) => {
    // Book title
    const [enteredTitle, setEnteredTitle] = useState<string>(props.currentTitle);
    // Book ISBN
    const [enteredIsbn, setEnteredIsbn] = useState<string>(props.currentIsbn);
    // Book Author
    const [enteredAuthor, setEnteredAuthor] = useState<string>(props.currentAuthor);
    // Validate
    const [validated, setValidated] = useState<boolean>(false);

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
    // Handling changes of book title field
    const handleEnterTitleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const title = event.target.value;
        setEnteredTitle(title);
    }
    // submit update book form
    const submitUpdateBookForm = (event: React.FormEvent) => {
        event.preventDefault()
        event.stopPropagation()
        setValidated(true);
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
                        <Col className="ub-title" md={11} xs={10}>
                            <p className="ub-title-text">Update Book</p>
                        </Col>
                        <Col className="close-btn" md={1} xs={1} onClick={() => props.closeForm()}>
                            <XCircle className="close-icon" />
                        </Col>
                    </Row>
                </Col>
                <Col xs={3} />
                <Col xs={1} />
                <Col xs={9}>
                    <Form
                        noValidate
                        validated={validated}
                        className="ub-form"
                        onSubmit={(event: React.FormEvent) => submitUpdateBookForm(event)}
                    >
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
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a book title.
                            </Form.Control.Feedback>
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
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide an ISBN number.
                            </Form.Control.Feedback>
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
                                required
                            >
                                {
                                    (props.authors().length !== 0)
                                        &&
                                    props.authors().map(
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
                                    )
                                }
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please select an author.
                            </Form.Control.Feedback>
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