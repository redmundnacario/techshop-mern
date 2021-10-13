import React from "react";
import { Row, Col } from "react-bootstrap";

import ProductPageView from "./ProductPageView";

const ProductPageController = (props) => {
    const { product, isLoading } = props;

    if (isLoading) {
        return (
            <Row className="h-100">
                <Col className="h-100">
                    <div className="text-center">Loading...</div>
                </Col>
            </Row>
        );
    }

    if (!product) {
        return (
            <Row>
                <Col>
                    <div className="text-center">No data loaded.</div>
                </Col>
            </Row>
        );
    } else {
        return <ProductPageView product={product} />;
    }
};

export default ProductPageController;
