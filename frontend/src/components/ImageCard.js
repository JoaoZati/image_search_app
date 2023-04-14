import Card from 'react-bootstrap/Card';
import { Row, Col, Button } from 'react-bootstrap';

function ImageCard(props) {
    // console.log('render image card')
    var image = props['image']
    // console.log(image)
    // console.log(image["saved_database"])

    var variant = image.saved_database ? "success": "info";
    var button_text = image.saved_database ? "Saved": "Save";

    return (
        <Card style={{ width: '18rem', marginTop: '1em', marginBotton: '1em' }}>
            <Card.Img variant="top" src={image.urls?.full} />
            <Card.Body>
                <Card.Title>{image.title?.toUpperCase()}</Card.Title>
                <Card.Text>
                    {image.alt_description}
                </Card.Text>
                <Row>
                    <Col xs={6}>
                        <Button
                        variant={variant}
                        style={{width: '90%'}}
                        onClick={() => {props.handleSaveImage(image.id)}}
                        >
                            {button_text}
                        </Button>
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