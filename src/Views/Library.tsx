import React, {FC} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import libraryImg from "../assets/images/anna-hunko-ajE5goOGzZc-unsplash.jpg";
import Books from "../components/Books/Books";
import Authors from "../components/Authors/Authors";
import '../assets/styles/partials/Library.scss';

const Library: FC = () => {
    return(
            <Container className="Library px-0" fluid>
                <Row>
                    <Col className="px-0" xs={12}>
                        <h1 className="text-center py-2">My Library</h1>
                    </Col>
                    <Col className="px-0" xs={12}>
                        <img src={libraryImg} alt="Library" />
                    </Col>
                </Row>
                <Row className="credits">
                    <Col xs={9} />
                    <Col xs={3} className="text-end photo-credits">
                        Photo by
                        <a href="https://unsplash.com/@annahunko?
                            utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                        >
                            Anna Hunko
                        </a>
                        on
                        <a href="https://unsplash.com/?
                            utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                        >
                            Unsplash
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col className="book-container" style={{border: '1px solid black'}}><Books /></Col>
                    <Col style={{border: '1px solid black'}}><Authors /></Col>
                </Row>


                {/*<Container className="Library px-0" fluid={true}>*/}
                {/*    <h1 className="text-center py-2">My Library</h1>*/}
                {/*    <img src={libraryImg} alt="Library" />*/}
                {/*</Container>*/}
                {/*<Container className="credits">*/}
                {/*    <Row>*/}
                {/*        <Col xs={9} />*/}
                {/*        <Col className="text-end photo-credits">*/}
                {/*            Photo by*/}
                {/*            <a href="https://unsplash.com/@annahunko?*/}
                {/*                utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"*/}
                {/*            >*/}
                {/*                Anna Hunko*/}
                {/*            </a>*/}
                {/*            on*/}
                {/*            <a href="https://unsplash.com/?*/}
                {/*                utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"*/}
                {/*            >*/}
                {/*            Unsplash*/}
                {/*            </a>*/}
                {/*        </Col>*/}
                {/*    </Row>*/}
                {/*</Container>*/}
                {/*<Container fluid>*/}
                {/*    <Row>*/}
                {/*        <Books />*/}
                {/*        <Authors />*/}
                {/*    </Row>*/}
                {/*</Container>*/}


            </Container>
    );
}

export default Library;