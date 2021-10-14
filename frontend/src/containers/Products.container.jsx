import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getlistProducts } from "../redux/product/product.actions";

const Products = (Component) => {
    const WithStateComponents = () => {
        // const [products, setProducts] = useState([]);
        // const [isLoading, setIsLoading] = useState(false);

        const dispatch = useDispatch();
        const productList = useSelector((state) => state.productList);
        const { loading, error, products } = productList;

        useEffect(() => {
            dispatch(getlistProducts());
            // eslint-disable-next-line
        }, [dispatch]);

        const props = {
            products,
            loading,
            error,
        };
        return <Component {...props} />;
    };
    return WithStateComponents;
};

export default Products;
