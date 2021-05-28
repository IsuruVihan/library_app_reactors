import React, {FC} from 'react';
import {Col} from "react-bootstrap";
import '../../assets/styles/partials/NoAuthors.scss';

const NoAuthors: FC = () => {
    return (
        <Col xs={12}>
            <p className="no-authors">
                <i>No authors listed here</i>
            </p>
        </Col>
    );
}

export default NoAuthors;