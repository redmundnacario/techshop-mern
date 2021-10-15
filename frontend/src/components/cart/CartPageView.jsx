import React from "react";
import {
    Row,
    Col,
    ListGroup,
    Image,
    Form,
    Button,
    Card,
} from "react-bootstrap";

import { Link } from "react-router-dom";

const CartPageView = (props) => {
    const { cartItems, addItemToCartHandler, removeItemFromCartHandler } =
        props;

    return (
        <Row data-test="cart-page-view">
            <Col md={8}>
                <ListGroup variant="flush">
                    {cartItems.map((item) => (
                        <ListGroup.Item key={item._id}>
                            <Row>
                                <Col md={2}>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fluid
                                        rounded
                                    />
                                </Col>
                                <Col md={3}>
                                    <Link to={`/products/${item._id}`}>
                                        {item.name}
                                    </Link>
                                </Col>
                                <Col md={2}>${item.price}</Col>
                                <Col md={2}>
                                    <Form.Control
                                        as="select"
                                        value={item.quantity}
                                        onChange={(e) =>
                                            addItemToCartHandler(
                                                e,
                                                item,
                                                e.target.value
                                            )
                                        }
                                    >
                                        {[
                                            ...Array(item.countInStock).keys(),
                                        ].map((x) => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Col>
                                <Col md={2}>
                                    <Button
                                        type="button"
                                        variant="light"
                                        onClick={(e) =>
                                            removeItemFromCartHandler(
                                                e,
                                                item._id
                                            )
                                        }
                                    >
                                        <i className="fas fa-trash"></i>
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>
                                Subtotal (
                                {cartItems.reduce(
                                    (acc, item) => acc + item.quantity,
                                    0
                                )}
                                ) items
                            </h2>
                            $
                            {cartItems
                                .reduce(
                                    (acc, item) =>
                                        acc + item.quantity * item.price,
                                    0
                                )
                                .toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item className="d-grid">
                            <Button
                                type="button"
                                className="btn"
                                disabled={cartItems.length === 0}
                            >
                                Proceed To Checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    );
};

export default CartPageView;
