import React from "react";

import ProductPage from "./ui/Page/ProductPage.component";

const ProductPageView = (props) => {
    const { product } = props;
    return <ProductPage {...product} />;
};

export default ProductPageView;
