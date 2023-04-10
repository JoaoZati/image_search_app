import Card from 'react-bootstrap/Card';
import { Row, Col, Button } from 'react-bootstrap';

function ImageCard(props) {
    var image = props['image']
    return (
        <Card style={{ width: '18rem', marginTop: '1em' }}>
            <Card.Img variant="top" src={image.urls.full} />
            <Card.Body>
                <Card.Title>{image.title}</Card.Title>
                <Card.Text>
                    {image.alt_description}
                </Card.Text>
                <Row>
                    <Col xs={6}>
                        <Button variant="info" style={{width: '90%'}}>Save</Button>
                    </Col>
                    <Col xs={6}>
                        <Button
                        variant="danger"
                        style={{width: '90%'}}
                        onClick={() => {props.handleDeleteImage(image.id)}}
                        >
                            Delete
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default ImageCard;