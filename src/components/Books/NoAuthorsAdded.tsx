import React, {FC} from 'react';
import {Col} from "react-bootstrap";
import '../../assets/styles/partials/NoAuthorsAdded.scss';

const NoAuthorsAdded: FC = () => {
    return (
        <Col xs={12}>
            <p className="no-authors-added"><i>No authors added to the system</i></p>
        </Col>
    );
}

export default NoAuthorsAdded;