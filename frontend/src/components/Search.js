import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ImageCard from './ImageCard';
import Welcome from './Welcome';

import Form from 'react-bootstrap/Form';

const searchStyle = {
    width: '90%'
}


class CustomForm extends Component {
    render() {
        return (
            <Form onSubmit={this.props.onSubmit} id="image-form">
                <Form.Label htmlFor="inputPassword5">
                    Search Bar
                </Form.Label>
                <Form.Control
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Search for new image here..."
                    value={this.props.word}
                    onChange={(e) => this.props.setWord(e.target.value)}
                />
                {/* <Form.Text id="passwordHelpBlock" muted>
                    Your password must be 8-20 characters long, contain letters and numbers,
                    and must not contain spaces, special characters, or emoji.
                </Form.Text> */}
            </Form>
        );
    }
}


function Search({ word, setWord, handleSubmit, images, handleDeleteImage}) {
    console.log('function Search')
    const imageCards = [];
    for (let i = 0; i < images.length; i++) {
        console.log('function image')
        imageCards.push(
            <Col>
                <ImageCard image={images[i]} handleDeleteImage={handleDeleteImage}/>
            </Col>
        );
    }

    if (!imageCards.length) {
        imageCards.push(
            <Col>
                <Welcome />
            </Col>
        )
    }

    return (
        <Container style = {{ marginTop: '2em'}}>
            <Row className="align-items-end">
                <Col xs={8}>
                    <CustomForm word={word} setWord={setWord} onSubmit={handleSubmit}/>
                </Col>
                <Col xs={4} >
                    <Button form="image-form" type="submit" variant="info" style={searchStyle}>Search</Button>{' '}
                </Col>
            </Row>
            <Row style = {{ marginTop: '2em'}}>
                {imageCards}
            </Row>
        </Container>
    )
}

export default Search