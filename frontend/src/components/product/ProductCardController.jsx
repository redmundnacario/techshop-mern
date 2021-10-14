import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductCardView from "./ProductCardView";
import SpinnerLoader from "../common/SpinnerLoader";
import AlertMessage from "../common/AlertMessage";

const ProductCardController = (props) => {
    // const productsMapped = validateProducts(props);
    const { products, loading, error } = props;

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

    if (products.data) {
        if (products.data.length > 0) {
            const { data } = products;

            return (
                <Row>
                    {data.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <ProductCardView product={product} />
                        </Col>
                    ))}
                </Row>
            );
        }
    }
};

export default ProductCardController;
