import React, {FC, Fragment} from 'react';
import './App.scss';
import {Col, Container, Row} from "react-bootstrap";
import libraryImg from './assets/images/anna-hunko-ajE5goOGzZc-unsplash.jpg';
import Books from "./components/Books/Books";
import Authors from "./components/Authors/Authors";

const App: FC = () => {
    return(
        <Fragment>
            <Container className="App px-0" fluid={true}>
                <h1 className="text-center py-2">My Library</h1>
                <img src={libraryImg} alt="Library" />
            </Container>
            <Container className="credits">
                <Row>
                    <Col xs={9} />
                    <Col className="text-end photo-credits">
                        Photo by
                        <a href="https://unsplash.com/@annahunko?
                        utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                        >
                        Anna Hunko</a>
                        on
                        <a href="https://unsplash.com/?
                        utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                        >
                            Unsplash
                        </a>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Books />
                    <Authors />
                </Row>
            </Container>
        </Fragment>
  );
}

export default App;