import Card from 'react-bootstrap/Card';
import { Row, Col, Button, Nav } from 'react-bootstrap';

function createCardFooter(image) {
    var cardFooter = [];
    if (!image.user) {
        cardFooter.push(
            <Card.Footer className="text-center text-muted">
                No author
            </Card.Footer>
        )

        return cardFooter
    }

    let name = image.user.name ? image.user.name: "No author";
    let portfolio_url = image.user.portfolio_url
    console.log('name:', name);
    console.log('portfolio_url', portfolio_url)

    if (!portfolio_url) {
        console.log("return CardFooter Portifolio")
        console.log(name)
        cardFooter.push(
            <Card.Footer className="text-center text-muted">
                {name}
            </Card.Footer>
        )

        return cardFooter
    }
    
    cardFooter.push(
        <Card.Footer>
            <Nav className="justify-content-center">
                <Nav.Item>
                    <Nav.Link href={portfolio_url} target={"_blank"}>{name}</Nav.Link>
                </Nav.Item>
            </Nav>
        </Card.Footer>
    )

    return cardFooter
}

function ImageCard(props) {
    // console.log('render image card')
    var image = props['image']
    // console.log(image)
    // console.log(image["saved_database"])

    var variant = image.saved_database ? "success": "info";
    var button_text = image.saved_database ? "Saved": "Save";

    var cardFooter = createCardFooter(image);

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
            {cardFooter}
            {/* <Card.Footer>
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Footer> */}
        </Card>
    );
}

export default ImageCard;