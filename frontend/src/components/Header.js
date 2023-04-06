import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header(props) {
    return (
        <>
            <Navbar bg={props['bg']} variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                        alt=""
                        src="./favicon-32x32.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        style={{ marginRight: '1em' }}
                        />
                        {props['title']}
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link> */}
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;