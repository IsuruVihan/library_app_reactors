import React, {FC, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import libraryImg from "../assets/images/anna-hunko-ajE5goOGzZc-unsplash.jpg";
import Books from "../components/Books/Books";
import Authors from "../components/Authors/Authors";
import '../assets/styles/partials/Library.scss';
import '../assets/styles/partials/MobileResponsive.scss';
import IAuthor from "../interfaces/IAuthor";
import LibraryFooter from "../components/Footer/LibraryFooter";

const Library: FC = () => {
    // Author list to be rendered inside add book form
    const [fullAuthorList, setFullAuthorList] = useState<IAuthor[]>([]);

    // Get all available authors from the authors section
    const getAvailableAuthors = (authors: IAuthor[]) => {
        setFullAuthorList(authors);
    }
    // Send all available authors into books section
    const sendAvailableAuthors = (): IAuthor[] => {
        return fullAuthorList;
    }

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
                <Col md={true}/>
                <Col md={true} xs={12} className="text-end photo-credits">
                    <a href="https://unsplash.com/@annahunko?
                       utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    >Photo by Anna Hunko on Unsplash</a>
                </Col>
            </Row>
            <Row>
                <Col md={{ order: 'first',span:6 }} xs={{ order: 'last',span:12 }} className="book-container">
                    <Books
                        authorsAvailable={sendAvailableAuthors}
                    />
                </Col>
                <Col md={6}  xs={12}>
                    <Authors
                        returnAvailableAuthors={getAvailableAuthors}
                    />
                </Col>
            </Row>
            <Row>
                <LibraryFooter></LibraryFooter>
            </Row>
        </Container>
    );
}

export default Library;