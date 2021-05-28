import React, {FC} from 'react';
import {Col} from "react-bootstrap";
import '../../assets/styles/partials/NoBooks.scss';

const NoBooks: FC = () => {
    return (
        <Col xs={12}>
            <p className="no-books">
                <i>No books listed here</i>
            </p>
        </Col>
    );
}

export default NoBooks;