import React from "react";
import { Row, Col, ListGroup, Image, Card, Button } from "react-bootstrap";
import Rating from "../Rating/Rating.component";

const ProductPage = (props) => {
    const {
        name,
        image,
        description,
        brand,
        category,
        price,
        countInStock,
        rating,
        numReviews,
    } = props;
    // console.log(props);
    return (
        <Row>
            <Col md={6}>
                <Image src={image} alt={name} fluid />
            </Col>

            <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={rating} text={`${numReviews} reviews`} />
                    </ListGroup.Item>
                    <ListGroup.Item>Price: ${price}</ListGroup.Item>
                    <ListGroup.Item>Description: {description}</ListGroup.Item>
                </ListGroup>
            </Col>

            <Col md={3}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                    <strong>${price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                    {countInStock > 0
                                        ? "In Stock"
                                        : "Out Of Stock"}
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item className="d-grid">
                            <Button type="button" disabled={countInStock === 0}>
                                Add to Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    );
};

export default ProductPage;
