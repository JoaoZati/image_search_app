import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import Form from 'react-bootstrap/Form';

function FormTextExample() {
    return (
        <>
            <Form.Label htmlFor="inputPassword5">
                Search Bar
            </Form.Label>
            <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                placeholder="Search for new image here..."
            />
            {/* <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and numbers,
                and must not contain spaces, special characters, or emoji.
            </Form.Text> */}
        </>
    );
}

function Search() {
    return (
        <Container style = {{ marginTop: '2em'}}>
            <Row className="align-items-end">
                <Col xs={8}>
                    {FormTextExample()}
                </Col>
            <Col xs={4} >
                    <Button variant="info" style={{ width: '90%' }}>Info</Button>{' '}
                </Col>
            </Row>
        </Container>
    )
}

export default Search