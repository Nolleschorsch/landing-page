import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo from './logo.svg';
import heroImg from './hero-image.jpg';
import './App.css';
import ProductCarousel from './ProductCarousel';
import Newsletter from './Newsletter';
import SocialFollow from './SocialFollow';


export const App = () => {
    return (
        <Container>

            <Navbar collapseOnSelect expand="md" variant="green">
                <Navbar.Brand href="#home">
                    <img src={logo} height="40vmin" className="App-logo d-inline-block align-top" alt="React Bootstrap logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#products">Products</Nav.Link>
                        <Nav.Link href="#about">About us</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            {/* Bootstrap 5 removed Jumbotron. See https://getbootstrap.com/docs/5.0/migration/#jumbotron */}
            <div id="jumbotron" className="bg-light p-5 rounded m-3" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover" }}>
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <button className="btn btn-flat btn-lg" href="#">Learn more</button>
            </div>

            <ProductCarousel interval={3000} />

            <Row style={{ background: "rgb(5, 60, 5)", textAlign: "center" }} className="align-items-center">
                <Col md={4} ><Newsletter /></Col>
                <Col md={8} ><SocialFollow /></Col>
            </Row>

        </Container>
    );
}

export default App;
