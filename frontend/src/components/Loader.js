import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import { Row, Col } from "react-bootstrap";

var styleSpinner = {
    position: 'absolute',
    top: '50%',
    left: '50%',
}

function Loader() {
    return (
        <Row>
            <Col xs={12}>
                <Spinner animation="border" variant="info" style={styleSpinner} />
            </Col>
        </Row>
    );
};

export default Loader;