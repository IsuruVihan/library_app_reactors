import React, {FC} from 'react';
import './App.scss';
import {Col, Container, Row} from "react-bootstrap";
import libraryImg from './assets/images/anna-hunko-ajE5goOGzZc-unsplash.jpg';

const App: FC = () => {
  return(
      <Container className="App px-0" fluid>
        <h1 className="text-center py-2">My Library</h1>
        <img src={libraryImg} alt="Library" />
        <Row>
            <Col xs={9}></Col>
            <Col xs={3}>
                Photo by
                <a href="https://unsplash.com/@annahunko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Anna Hunko</a>
                on
                <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                </a>
            </Col>
        </Row>
      </Container>
  );
}

export default App;