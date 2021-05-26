import React, {FC, useState} from 'react';
import {Col, Container, Row, Button, Form} from "react-bootstrap";
import '../../assets/styles/partials/UpdateBookForm.scss';
import {XCircle} from 'react-feather';
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
        if (enteredTitle === "" || enteredPrice === "") {
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

    return (
        <Container style={{border: '2px solid red'}} className="ub-form-container px-0" fluid={true}>
            <Row className="mx-0" style={{border: '2px solid blue'}}>
                <Col style={{border: '2px solid orange'}} md={9} xs={12}>
                    <Row style={{border: '2px solid green'}}>
                        <Col style={{border: '2px solid black'}} className="ub-title px-0" md={11} xs={10}>
                            <p style={{border: '2px solid cyan'}} className="ub-title-text p-0 m-0"><u>Update Book</u></p>
                        </Col>
                        <Col style={{border: '2px solid black'}} className="close-btn px-0 py-1" md={1} xs={2} onClick={() => props.closeForm()}>
                            <XCircle style={{border: '2px solid cyan'}} className="close-icon p-0 m-0"/>
                        </Col>
                    </Row>
                </Col>
                <Col style={{border: '2px solid orange'}} md={3} xs={0} />
                <Col style={{border: '2px solid orange'}} xs={1} />
                <Col className="px-0" style={{border: '2px solid orange'}} md={8} xs={11}>
                    <Form
                        style={{border: '2px solid green'}}
                        noValidate
                        validated={validated}
                        className="ub-form"
                        onSubmit={(event: React.FormEvent) => submitUpdateBookForm(event)}
                    >
                        <Form.Group style={{border: '2px solid black'}}>
                            <Form.Label style={{border: '2px solid cyan'}} className="book-title-label my-0">Title of the Book</Form.Label>
                            <Form.Control
                                style={{border: '2px solid cyan'}}
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
                        <Form.Label style={{border: '2px solid black'}} className="book-price-label my-0">Price</Form.Label>
                        <Form.Group style={{border: '2px solid black'}}>
                            <CurrencyFormat
                                style={{border: '2px solid cyan', width: '100%'}}
                                className="book-price-input"
                                size="sm"
                                inputMode="numeric"
                                thousandSeparator={true}
                                prefix={'$'}
                                value={enteredPrice}
                                onChange={
                                    (event: React.ChangeEvent<HTMLInputElement>) =>
                                        handleEnterPriceChangeEvent(event)
                                }
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide an price number.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group style={{border: '2px solid black'}}>
                            <Form.Label style={{border: '2px solid cyan'}} className="book-author-label my-0">Author</Form.Label>
                            <Form.Control
                                style={{border: '2px solid cyan'}}
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
                                            return (
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
                        <Form.Group style={{border: '2px solid black'}} className="update-btn-container pt-4">
                            <Button style={{border: '2px solid cyan'}} className="update-btn" variant="primary" type="submit" size="sm">
                                Update
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
                {/*<Col style={{border: '2px solid red'}} md={3} xs={0} />*/}
            </Row>
        </Container>
    );
}

export default UpdateBookForm;