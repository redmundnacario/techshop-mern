import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../redux/product/product.actions";
// import Home from "../page/Home.page";

const Product = (Component) => {
    const WithStateComponents = ({ history, match }) => {
        const id = match.params.id;

        const dispatch = useDispatch();
        const productDetails = useSelector((state) => state.productDetails);
        const { product, loading, error } = productDetails;

        useEffect(() => {
            dispatch(getProductDetails(id));
            // eslint-disable-next-line
        }, []);

        const props = {
            product,
            loading,
            error,
        };
        return <Component {...props} />;
    };
    return WithStateComponents;
};

export default Product;
