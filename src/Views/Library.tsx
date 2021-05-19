import React, {FC, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import libraryImg from "../assets/images/anna-hunko-ajE5goOGzZc-unsplash.jpg";
import Books from "../components/Books/Books";
import Authors from "../components/Authors/Authors";
import '../assets/styles/partials/Library.scss';
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
            <Row style={{width: '100vw'}}>
                <Col className="px-0" xs={12}>
                    <h1 className="text-center py-2">My Library</h1>
                </Col>
                <Col className="px-0" xs={12}>
                    <img src={libraryImg} alt="Library" />
                </Col>
            </Row>
            <Row className="credits" style={{width: '100%'}}>
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
            <Row style={{width: '100%'}}>
                <Col xs={6} className="book-container">
                    <Books
                        authorsAvailable={sendAvailableAuthors}
                    />
                </Col>
                <Col xs={6}>
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