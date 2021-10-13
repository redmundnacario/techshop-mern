import React from "react";
import Card from "./ui/Card/Card.component";

const ProductCardView = (props) => {
    const { product } = props;
    return <Card {...product} />;
};

export default ProductCardView;
