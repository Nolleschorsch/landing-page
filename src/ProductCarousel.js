import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getProductList } from './FakeBackend'


const productList = getProductList();
const numberOfCarouselItems = Math.ceil(productList.length / 3)
const numberOfCols = 3
let index = -1;

/* generates numberOfCarouselItems Carousel.Items with a maximum of numberOfCols Cols each */
const carouselItems = [...Array(numberOfCarouselItems).keys()].map((x, keyX) => {
    let cols = [...Array(numberOfCols).keys()].map((y, keyY) => {
        index++;
        let product = productList[index]
        if (product === undefined) return null
        return (
            <Col md key={`carouselItem-${keyX}-col-${keyY}`}>
                <Card className="h-100">
                    <Card.Img variant="top" src={product.src}
                        srcSet={product.srcSet}
                        size={product.size}
                        alt={product.alt}
                        className="img-fluid" />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.text}</Card.Text>
                        <Button variant="flat">{product.btnText}</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    })
    return (<Carousel.Item key={`carouselItem-${keyX}`}><Row>{cols}</Row></Carousel.Item>)
})


export const ProductCarousel = (props) => {

    const { interval } = props

    return (
        <Carousel fade indicators={false} variant="dark" controls={false} interval={interval || 5000}>
            {carouselItems}
        </Carousel>
    )
};

export default ProductCarousel;