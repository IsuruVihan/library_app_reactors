import React from "react";
import {MDBCol, MDBContainer, MDBFooter, MDBRow} from "mdbreact";
import {Card} from "react-bootstrap";

const LibraryFooter:React.FC = () => {
    return(
        <Card className="text-center">
            <Card.Footer className="text-muted">
                <Card.Title>My Library</Card.Title>
                <Card.Text>
                    React Base Industrial Training Program (Apr) - <a href="https://www.softvessel.com"> SoftVessel (Pvt) Ltd </a>
                </Card.Text>
                &copy; {new Date().getFullYear()} Copyright: Team Reactors
            </Card.Footer>
        </Card>
    );
}

export default LibraryFooter;