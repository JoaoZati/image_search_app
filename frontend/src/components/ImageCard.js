import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function ImageCard(props) {
    var image = props['image']
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image.urls.full} />
            <Card.Body>
                <Card.Title>{image.title}</Card.Title>
                <Card.Text>
                    {image.alt_description}
                </Card.Text>
                <Button variant="info">Save</Button>
            </Card.Body>
        </Card>
    );
}

export default ImageCard;