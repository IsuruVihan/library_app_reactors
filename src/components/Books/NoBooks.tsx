import React, {FC} from 'react';
import {Col} from "react-bootstrap";
import '../../assets/styles/partials/NoAuthors.scss';

const NoBooks: FC = () => {
    return(
        <Col xs={12}>
            <p className="no-authors"><i>No Books listed here</i></p>
        </Col>
    );
}

export default NoBooks;