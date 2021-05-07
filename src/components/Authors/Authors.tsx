import React, {FC} from 'react';
import {Col} from "react-bootstrap";
import '../../assets/styles/Authors.scss';
import { Plus } from 'react-feather';

const Authors: FC = () => {
    return(
        <Col className="Authors px-5">
            <p className="title">Authors</p>
            <span className="no-authors"><i>No authors listed here</i></span>
            <p className="add-author pt-3">
                <Plus color="#034fa5" className="plus" />
                <span className="add-author-text">
                    Add Author
                </span>
            </p>
        </Col>
    );
}

export default Authors;