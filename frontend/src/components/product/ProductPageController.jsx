import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductPageView from "./ProductPageView";
import SpinnerLoader from "../common/SpinnerLoader";
import AlertMessage from "../common/AlertMessage";

import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";

const ProductPageController = (props) => {
    const { product, loading, error } = props;

    const dispatch = useDispatch();

    const addItemToCartHandler = (e, productToAdd, quantity) => {
        e.preventDefault();
        console.log("input quantity", quantity);
        dispatch(addItemToCart(productToAdd, parseInt(quantity)));
    };

    if (loading) {
        return (
            <Row>
                <Col className="position-absolute top-50 start-50 translate-middle">
                    <SpinnerLoader />
                </Col>
            </Row>
        );
    }

    if (error) {
        return (
            <Row>
                <Col>
                    <AlertMessage variant="danger">{error}</AlertMessage>
                </Col>
            </Row>
        );
    }

    if (product.data) {
        const propsToSend = {
            product: product.data,
            addItemToCartHandler,
        };
        return <ProductPageView {...propsToSend} />;
    }
};

export default ProductPageController;
