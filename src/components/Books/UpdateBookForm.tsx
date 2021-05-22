import React, {FC, useState} from 'react';
import {Col, Container, Row, Button, Form} from "react-bootstrap";
import '../../assets/styles/partials/UpdateBookForm.scss';
import { XCircle } from 'react-feather';
import IAuthor from "../../interfaces/IAuthor";
import * as CurrencyFormat from 'react-currency-format';

type UpdateBookFormProps = {
    closeForm: () => void,
    updateBook: (event: React.FormEvent, title: string, isbn: string, author: string) => void,
    authors: () => IAuthor[],
    currentTitle: string,
    currentIsbn: string,
    currentAuthor: string
};

const UpdateBookForm: FC<UpdateBookFormProps> = (props) => {
    // Book Price
    const [enteredPrice, setEnteredPrice] = useState<string>(props.currentIsbn);
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
    // Handling changes of book price field
    const handleEnterPriceChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const price = event.target.value;
        setEnteredPrice(price);
    }
    // Handling changes of book price field
    const handleEnterTitleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const title = event.target.value;
        setEnteredTitle(title);
    }
    // submit update book form
    const submitUpdateBookForm = (event: React.FormEvent) => {
        event.preventDefault()
        event.stopPropagation()
        setValidated(true);
        if(enteredTitle === "" || enteredPrice === "") {
            return;
        }

        const bookTitleToBeUpdated = enteredTitle;
        const bookPriceToBeUpdated = enteredPrice;
        const bookAuthorToBeUpdated = enteredAuthor;
        setEnteredTitle("");
        setEnteredPrice("");
        setEnteredAuthor("");
        return props.updateBook(event, bookTitleToBeUpdated, bookPriceToBeUpdated, bookAuthorToBeUpdated);
    }

    return(
        <Container className="ub-form-container" fluid={true}>
            <Row>
                <Col md={9} xs={12}>
                    <Row>
                        <Col className="ub-title" md={11} xs={10}>
                            <p className="ub-title-text">Update Book</p>
                        </Col>
                        <Col className="close-btn" md={1} xs={2} onClick={() => props.closeForm()}>
                            <XCircle className="close-icon" />
                        </Col>
                    </Row>
                </Col>
                <Col md={3} />
                <Col md={1} />
                <Col md={9} xs={12}>
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
                        <Form.Label className="book-price-label">Price</Form.Label>
                        <Form.Group>
                            <CurrencyFormat
                                className="book-price-input"
                                size="sm"
                                inputMode="numeric"
                                thousandSeparator={true}
                                prefix={'$'}
                                value={props.currentIsbn}
                                onValueChange={
                                    (values) => {
                                        const {formattedValue, value} = values;
                                        setEnteredPrice(value);
                                    }
                                }
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide an price number.
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