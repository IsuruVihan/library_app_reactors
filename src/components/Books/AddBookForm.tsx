import React, {FC, useState} from 'react';
import {Col, Container, Row, Button, Form} from "react-bootstrap";
import '../../assets/styles/partials/AddBookForm.scss';
import { XCircle } from 'react-feather';

type AddBookFormProps = {
    closeForm: () => void
    createBook : (event: React.FormEvent, title: string,isbn:string,author:string) => void
};

const AddBookForm: FC<AddBookFormProps> = (props) => {

    const [bookTitle, setTitle] = useState<string>("");
    const [isbn, setIsbn] = useState<string>("");
    const [author, setAuthor] = useState<string>("");

    const handleEnterBookTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        const book_title= event.target.value;
        setTitle(book_title);
    }
    const handleEnterBookISbn = (event: React.ChangeEvent<HTMLInputElement>) => {
        const Isbn = event.target.value;
        setIsbn(Isbn);
    }
    const handleEnterBookAuthor = (event: React.ChangeEvent<HTMLInputElement>) => {
        const author_Name = event.target.value;
        setAuthor(author_Name);
    }

    const submitBookForm = (event: React.FormEvent) => {
        event.preventDefault();
        if(bookTitle === "") {
            return;
        }
        else if(isbn=== ""){
            return;
        }
        else if(author===""){
            return ;
        }

        const titleToBeAdded = bookTitle;
        const isbnToBeAdded = isbn;
        const authornameToBeAdded = author;
        return props.createBook(event, titleToBeAdded,isbnToBeAdded,authornameToBeAdded);

    }
    return(
        <Container className="ab-form-container" fluid={true}>
            <Row>
                <Col xs={9}>
                    <Row>
                        <Col className="cb-title" xs={11}><p className="cb-title-text">Create Book</p></Col>
                        <Col className="close-btn" xs={1}><XCircle className="close-icon" onClick={() => props.closeForm()} /></Col>
                    </Row>
                </Col>
                <Col xs={3} />
                <Col xs={1} />
                <Col xs={9}>
                    <Form className="ab-form" onSubmit={(event)=>submitBookForm(event)}>
                        <Form.Group>
                            <Form.Label className="book-title-label">Title of the Book</Form.Label>
                            <Form.Control className="book-title-input" type="text" size="sm" onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) =>
                                    handleEnterBookTitle(event)
                            } />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="book-isbn-label">ISBN</Form.Label>
                            <Form.Control className="book-isbn-input" type="text" size="sm" onChange={
                                (event: React.ChangeEvent<HTMLInputElement>) =>
                                    handleEnterBookISbn(event)
                            }  />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="book-author-label">Author</Form.Label>
                            <Form.Control className="book-author-input" size="sm" as="select" value={author} onChange={handleEnterBookAuthor}>
                                <option>Author 1</option>
                                <option>Author 2</option>
                                <option>Author 3</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="create-btn-container">
                            <Button className="create-btn" variant="primary" type="submit" size="sm" >
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