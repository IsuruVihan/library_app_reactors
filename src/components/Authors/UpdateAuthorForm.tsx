import React, {FC, useState} from 'react';
import {Col, Container, Row, Button, Form} from "react-bootstrap";
import '../../assets/styles/partials/UpdateAuthorForm.scss';
import {XCircle} from 'react-feather';
import '../../assets/styles/partials/MobileResponsive/Authors/UpdateAuthorFormResponsive.scss';

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
        if (enteredAuthor === "") {
            return;
        }

        const authorToBeUpdated = enteredAuthor;
        setEnteredAuthor("");
        return props.updateAuthor(event, authorToBeUpdated);
    }

    return (
        <Container className="ua-form-container px-0" fluid={true}>
            <Row className="mx-0">
                <Col className="top px-0" md={9} xs={12}>
                    <Row className="mx-0">
                        <Col className="ua-title my-0 px-0" md={11} xs={10}>
                            <p className="ua-title-text"><u>Update Author</u></p>
                        </Col>
                        <Col className="close-btn text-right py-2 px-1" md={1} xs={2}>
                            <XCircle className="close-icon m-0 p-0" onClick={() => props.closeForm()}/>
                        </Col>
                    </Row>
                </Col>
                <Col md={9} className="pt-2">
                    <Row>
                        <Col xs={1} className="px-0"/>
                        <Col xs={11} className="px-0">
                            <Form
                                style={{width: '100%'}}
                                noValidate
                                validated={validated}
                                className="ua-form"
                                onSubmit={(event: React.FormEvent) => submitUpdateAuthorForm(event)}
                            >
                                <Form.Group className="p-0 m-0">
                                    <Form.Label className="author-name-label my-0">Name of Author</Form.Label>
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
                                <Form.Group className="update-btn-container pt-4">
                                    <Button className="update-btn" variant="primary" type="submit" size="sm">
                                        Update
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default UpdateAuthorForm;