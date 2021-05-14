import React, {FC} from "react";
import {Row, Col, Container, Form, Button} from "react-bootstrap";
import '../../assets/styles/partials/UpdateBookForm.css';
import {XCircle} from "react-feather";

type UpdateBookFormProps={
    closeForm:()=>void
}

const UpdateBookForm:FC<UpdateBookFormProps> =(props)=>{
    return(
        <Container className="ub-form-container" fluid={true} >
            <Row>
                <Col xs={9}>
                    <Row>
                        <Col className="ub-title" xs={11}>
                            <p className="ub-title-text">Update Book</p>
                        </Col>
                        <Col className="close-btn" xs={1}>
                            <XCircle className="close-icon" onClick={() => props.closeForm()} />
                        </Col>
                    </Row>
                </Col>
            <Col xs={3} />
            <Col xs={1} />
            <Col xs={9}>
                <Form className="ub-form" >
                    <Form.Group>
                        <Form.Group>
                            <Form.Label className="book-title-label">Title of the Book</Form.Label>
                            <Form.Control className="book-title-input" type="text" size="sm" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="book-isbn-label">ISBN</Form.Label>
                            <Form.Control className="book-isbn-input" type="text" size="sm" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="book-author-label">Author</Form.Label>
                            <Form.Control className="book-author-input" size="sm" as="select">
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
                    </Form.Group>
                </Form>
            </Col>
        </Row>
</Container>
);

}

export default UpdateBookForm