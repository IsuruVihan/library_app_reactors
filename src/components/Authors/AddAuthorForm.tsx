import React, {FC, useState} from 'react';
import {Col, Container, Row, Button, Form} from "react-bootstrap";
import '../../assets/styles/partials/AddAuthorForm.scss';
import { XCircle } from 'react-feather';

type AddAuthorFormProps = {
    closeForm: () => void,
    createAuthor: (event: React.FormEvent, name: string) => void
};

const AddAuthorForm: FC<AddAuthorFormProps> = (props) => {
    // Entered author
    const [enteredAuthor, setEnteredAuthor] = useState<string>("");
    // Validate
    const [validated, setValidated] = useState<boolean>(false);
    // Handling the changes of author name field
    const handleEnterAuthorChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const authorName = event.target.value;
        setEnteredAuthor(authorName);
    }
    // submit add author form
    const submitAuthorForm = (event: React.FormEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);

        if(enteredAuthor === "") {
            return;
        }
        const authorToBeAdded = enteredAuthor;
        setEnteredAuthor("");
        return props.createAuthor(event, authorToBeAdded);
    }

    return(
        <Container className="aa-form-container" fluid={true}>
            <Row>
                <Col className="top" xs={9}>
                    <Row>
                        <Col className="ca-title" lg={11} md={11} xs={10}>
                            <p className="ca-title-text">Create Author</p>
                        </Col>
                        <Col className="close-btn" lg={1} md={1} xs={2}>
                            <XCircle className="close-icon" onClick={() => props.closeForm()} />
                        </Col>
                    </Row>
                </Col>
                {/*<Col className="align-3"/>*/}
                <Col className="col-9" />
                {/*<Col xs={3} />*/}
                {/*<Col xs={1} />*/}
                <Col xs={9}>
                    <Form
                        noValidate
                        className="aa-form"
                        validated={validated}
                        onSubmit={(event: React.FormEvent) => submitAuthorForm(event)}
                    >
                        <Form.Group>
                            <Form.Label className="author-name-label">Name of Author</Form.Label>
                            <Form.Control
                                className="author-name-input"
                                type="text"
                                size="sm"
                                value={enteredAuthor}
                                onChange={
                                    (event: React.ChangeEvent<HTMLInputElement>) =>
                                        handleEnterAuthorChangeEvent(event)
                                }
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide an author name.
                            </Form.Control.Feedback>
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

export default AddAuthorForm;