import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export const Product = (props) => {

    const { product } = props
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <Col md>
            <Card className="product-card">
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <>
                        <Card.Img variant="top" src={product.src}
                            srcSet={product.srcSet}
                            size={product.size}
                            alt={product.alt}
                            className="img-fluid" />
                        <Card.Body className="card-frontside">
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.text}</Card.Text>
                            <Button variant="green" onClick={() => setIsFlipped(!isFlipped)}>Show Details</Button>
                        </Card.Body>
                    </>
                    <>
                        <Card.Img variant="top" src={product.srcBackside}
                            srcSet={product.srcSetBackside}
                            size={product.size}
                            alt={product.altBackside}
                            className="img-fluid" />
                        <Card.Body className="card-backside">
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                Product Detail 1 ...<br />
                                Product Detail 2 ...<br />
                                Product Detail 3 ...<br />
                                Product Detail 4 ...<br />
                            </Card.Text>
                            <Button variant="green" onClick={() => setIsFlipped(!isFlipped)}>Back</Button>
                        </Card.Body>
                    </>
                </ReactCardFlip>
            </Card>

        </Col>
    )
}

export default Product