import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductPageView from "./ProductPageView";
import SpinnerLoader from "../common/SpinnerLoader";
import AlertMessage from "../common/AlertMessage";

const ProductPageController = (props) => {
    const { product, loading, error } = props;

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
        return <ProductPageView product={product.data} />;
    }
};

export default ProductPageController;
