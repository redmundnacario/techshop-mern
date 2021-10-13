import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-bootstrap";
import Product from "../../containers/Product.container";
import ProductPageController from "../../components/product/ProductPageController";

const ProductPage = (props) => {
    const view = ProductPageController(props);
    return (
        <>
            <Link to="/" className="btn btn-light my-3">
                Go Back
            </Link>
            {view}
        </>
    );
};

export default Product(ProductPage);
