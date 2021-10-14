import React, { useState, useRef } from "react";
import {
    Row,
    Col,
    ListGroup,
    Image,
    Card,
    Button,
    Form,
} from "react-bootstrap";
import Rating from "../Rating/Rating.component";

const ProductPage = (props) => {
    // const [quantity, setQuantity] = useState(1);
    const ref = useRef();

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
    } = props.product;
    const { addItemToCartHandler } = props;
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
                        {countInStock > 0 && (
                            <ListGroup.Item>
                                <Row>
                                    <Col>Qty:</Col>
                                    <Col>
                                        <Form.Control
                                            as="select"
                                            // value={quantity}
                                            ref={ref}
                                            onChange={(e) => {
                                                console.log(
                                                    "quantity: ",
                                                    ref.current.value
                                                );
                                            }}
                                        >
                                            {[
                                                ...Array(countInStock).keys(),
                                            ].map((i) => (
                                                <option
                                                    key={i + 1}
                                                    value={i + 1}
                                                >
                                                    {i + 1}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )}
                        <ListGroup.Item className="d-grid">
                            <Button
                                type="button"
                                disabled={countInStock === 0}
                                onClick={
                                    // console.log("clicked")
                                    (e) =>
                                        addItemToCartHandler(
                                            e,
                                            props.product,
                                            ref.current.value
                                        )
                                }
                            >
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
