import React, { useState, useEffect } from "react";
import axios from "axios";
// import Home from "../page/Home.page";

const Products = (Component) => {
    const WithStateComponents = () => {
        const [products, setProducts] = useState([]);
        const [isLoading, setIsLoading] = useState(false);

        const fetchAllProducts = () => {
            setIsLoading(true);

            axios("/api/v1/products")
                .then((res) => {
                    console.log(res.data);
                    return res.data.data;
                })
                .then((res) => {
                    setProducts(res);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        useEffect(() => {
            fetchAllProducts();
            // eslint-disable-next-line
        }, []);

        const props = {
            products,
            isLoading,
        };
        return <Component {...props} />;
    };
    return WithStateComponents;
};

export default Products;
