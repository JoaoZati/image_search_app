import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function ImageCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?ixid=Mnw0MzQxNDN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODExNDA5NTM&ixlib=rb-4.0.3" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default ImageCard;