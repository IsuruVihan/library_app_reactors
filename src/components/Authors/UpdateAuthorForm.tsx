import React, {FC, useState} from 'react';
import {Col, Container, Row, Button, Form} from "react-bootstrap";
import '../../assets/styles/partials/UpdateAuthorForm.scss';
import { XCircle } from 'react-feather';

type UpdateAuthorFormProps = {
    currentAuthorName: string,
    closeForm: () => void,
    updateAuthor: (event: React.FormEvent, name: string) => void
};

const UpdateAuthorForm: FC<UpdateAuthorFormProps> = (props) => {
    // Entered author
    const [enteredAuthor, setEnteredAuthor] = useState<string>(props.currentAuthorName);
    // Validate
    const [validated, setValidated] = useState<boolean>(false);
    // Handling the changes of author name field
    const handleEnterAuthorChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const authorName = event.target.value;
        setEnteredAuthor(authorName);
    }
    // submit update author form
    const submitUpdateAuthorForm = (event: React.FormEvent) => {
        event.preventDefault();
        event.stopPropagation()
        setValidated(true);
        if(enteredAuthor === "") {
            return;
        }

        const authorToBeUpdated = enteredAuthor;
        setEnteredAuthor("");
        return props.updateAuthor(event, authorToBeUpdated);
    }

    return(
        <Container className="ua-form-container" fluid={true}>
            <Row>
                <Col xs={9}>
                    <Row>
                        <Col className="ua-title" md={11} xs={10}><p className="ua-title-text">Update Author</p></Col>
                        <Col className="close-btn" xs={1}>
                            <XCircle className="close-icon" onClick={() => props.closeForm()} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={3} />
                <Col xs={1} />
                <Col xs={9}>
                    <Form
                        noValidate
                        validated={validated}
                        className="ua-form"
                        onSubmit={(event: React.FormEvent) => submitUpdateAuthorForm(event)}
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

export default UpdateAuthorForm;