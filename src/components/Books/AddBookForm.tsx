import React, {FC, useState} from 'react';
import {Col, Container, Row, Button, Form} from "react-bootstrap";
import '../../assets/styles/partials/AddBookForm.scss';
import {XCircle} from 'react-feather';
import IAuthor from "../../interfaces/IAuthor";
import NoAuthorsAdded from "./NoAuthorsAdded";
import * as CurrencyFormat from 'react-currency-format';

type AddBookFormProps = {
    closeForm: () => void,
    createBook: (event: React.FormEvent, name: string, price: string, author: string) => void,
    authors: () => IAuthor[]
};

const AddBookForm: FC<AddBookFormProps> = (props) => {
    // Book title
    const [bookTitle, setBookTitle] = useState<string>("");
    // Book Price
    const [price, setPrice] = useState<string>("");
    // Book Author
    const [bookAuthor, setBookAuthor] = useState<string>("Author 1");
    // Validate
    const [validated, setValidated] = useState<boolean>(false);

    // Change book title
    const handleBookTitleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newBookTitle = event.target.value;
        setBookTitle(newBookTitle);
    }
    // Change Book Price
    const handlePriceChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPrice = event.target.value;
        setPrice(newPrice);
    }
    // Change book Author
    const handleBookAuthorChangeEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newBookAuthor = event.target.value;
        setBookAuthor(newBookAuthor);
    }
    // submit add book form
    const submitBookForm = (event: React.FormEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);

        if (bookTitle === "" || price === "" || bookAuthor === "") {
            return;
        }
        const bookTitleToBeAdded = bookTitle;
        const priceToBeAdded = price;
        const bookAuthorToBeAdded = bookAuthor;
        setBookTitle("");
        setPrice("");
        return props.createBook(event, bookTitleToBeAdded, priceToBeAdded, bookAuthorToBeAdded);
    }

    return (
        <Container className="ab-form-container" fluid={true}>
            <Row>
                <Col md={9} xs={12}>
                    <Row>
                        <Col className="cb-title" md={11} xs={10}>
                            <p className="cb-title-text">Create Book</p>
                        </Col>
                        <Col
                            className="close-btn"
                            md={1} xs={2}
                        >
                            <XCircle className="close-icon" onClick={() => props.closeForm()}/>
                        </Col>
                    </Row>
                </Col>
                <Col md={3}/>
                <Col md={1}/>
                <Col md={9} xs={12}>
                    <Form
                        noValidate
                        className="ab-form"
                        validated={validated}
                        onSubmit={(event: React.FormEvent) => submitBookForm(event)}
                    >
                        <Form.Group>
                            <Form.Label className="book-title-label">Title of the Book</Form.Label>
                            <Form.Control
                                className="book-title-input"
                                type="text"
                                size="sm"
                                value={bookTitle}
                                onChange={
                                    (event: React.ChangeEvent<HTMLInputElement>) => handleBookTitleChangeEvent(event)
                                }
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a book title.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Label className="book-price-label">Price</Form.Label>
                        <Form.Group>
                            {/*Book Price currency-format*/}
                            <CurrencyFormat
                                className="book-price-input"
                                size="sm"
                                inputMode="numeric"
                                thousandSeparator={true}
                                prefix={'$'}
                                value={price}
                                onValueChange={
                                    (values) => {
                                        const {formattedValue, value} = values;
                                        setPrice(value);
                                    }
                                }
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a Price.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="book-author-label">Author</Form.Label>
                            <Form.Control
                                className="book-author-input"
                                size="sm"
                                as="select"
                                onChange={
                                    (event: React.ChangeEvent<HTMLSelectElement>) => handleBookAuthorChangeEvent(event)
                                }
                                value={bookAuthor}
                                required
                            >
                                {props.authors().map(
                                    (author: IAuthor) => {
                                        return (
                                            <option
                                                value={author.authorName}
                                                key={author.authorName}
                                            >
                                                {author.authorName}
                                            </option>
                                        );
                                    }
                                )}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please select a book author.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="create-btn-container">
                            <Button className="create-btn" variant="primary" type="submit" size="sm">
                                Create
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AddBookForm;