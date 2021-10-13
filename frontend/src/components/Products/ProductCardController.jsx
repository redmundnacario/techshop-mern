import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductCardView from "./ProductCardView";

const ProductCardController = (props) => {
    // const productsMapped = validateProducts(props);
    const { products, isLoading } = props;

    if (isLoading) {
        return (
            <Row className="h-100">
                <Col className="h-100">
                    <div className="text-center">Loading...</div>
                </Col>
            </Row>
        );
    }

    if (!products) {
        return (
            <Row>
                <Col>
                    <div className="text-center">No data loaded.</div>
                </Col>
            </Row>
        );
    } else {
        return (
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <ProductCardView product={product} />
                    </Col>
                ))}
            </Row>
        );
    }
};

export default ProductCardController;
