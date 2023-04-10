import Alert from 'react-bootstrap/Alert';

function Welcome() {
    return (
        <Alert variant="info">
            <Alert.Heading>Hey, Welcome to Image Gallery</Alert.Heading>
            <p>
                Aww yeah, here you can search any kind of image you want on the search bar above and
                it this app will show you a random image about your search.
            </p>
            <hr />
            <p className="mb-0">
                You can save to see later or delete the image. The images will be attached to your account
                after you save it
            </p>
        </Alert>
    );
}

export default Welcome;