import React from "react";
import { Row, Col } from "react-bootstrap";

import ProductPageView from "./ProductPageView";

const ProductPageController = (props) => {
    const { product, loading, error } = props;

    if (loading) {
        return (
            <Row className="h-100">
                <Col className="h-100">
                    <div className="text-center">Loading...</div>
                </Col>
            </Row>
        );
    }

    if (error) {
        return (
            <Row>
                <Col>
                    <div className="text-center">No data loaded.</div>
                </Col>
            </Row>
        );
    }

    if (product.data) {
        return <ProductPageView product={product.data} />;
    }
};

export default ProductPageController;
