import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo from './logo.svg';
import heroImg from './hero-image.jpg';
import './App.css';
import Product from './Product';
import Newsletter from './Newsletter';
import SocialFollow from './SocialFollow';
import { getProductList } from './FakeBackend'


const numberOfCols = 3
const productList = getProductList(3)

const products = [...Array(numberOfCols).keys()].map((y, keyY) => {
    let product = productList[keyY]
    return <Product key={keyY} product={product} />
})

export const App = () => {
    return (
        <>

            <Navbar collapseOnSelect expand="md" variant="green" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} height="40vmin" className="App-logo d-inline-block align-top" alt="React Bootstrap logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#products">Products</Nav.Link>
                            <Nav.Link href="#newsletter">Newsletter</Nav.Link>
                            <Nav.Link href="#social">Social Media</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Bootstrap 5 removed Jumbotron. See https://getbootstrap.com/docs/5.0/migration/#jumbotron */}
            <div id="jumbotron" className="bg-light p-5 rounded m-3" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover" }}>
                <div id="jumbotron-text" className="rounded m-3 p-5">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a className="btn btn-green btn-lg" href="#products">Learn more</a>
                </div>
            </div>
            <Container fluid>
                <Row id="products">{products}</Row>
            </Container>
            <Row id="footer" className="align-items-center">
                <Col md={4} className="mt-3"><Newsletter /></Col>
                <Col md={8} className="mt-3"><SocialFollow /></Col>
            </Row>

        </>
    );
}

export default App;
