import React from "react";
import Products from "../../containers/Products.container";

// import { validateProducts } from "./home.logic";

import ProductCardController from "../../components/product/ProductCardController";

const HomePage = (props) => {
    const productsMapped = ProductCardController(props);
    return (
        <>
            <h1>latest Products</h1>
            {productsMapped}
        </>
    );
};

export default Products(HomePage);
