import React, { useState, useEffect } from "react";
import axios from "axios";
// import Home from "../page/Home.page";

const Product = (Component) => {
    const WithStateComponents = ({ history, match }) => {
        const id = match.params.id;

        const [product, setProduct] = useState([]);
        const [isLoading, setIsLoading] = useState(false);

        const fetchSingleProduct = () => {
            setIsLoading(true);
            // fetch("../data/products.json")
            //     .then((res) => res.json())
            //     .then((res) => {
            //         const result = res.find((item) => item._id === id);
            //         setProduct(result);
            //         setIsLoading(false);
            //     });

            axios(`/api/v1/products/${id}`)
                .then((res) => {
                    console.log(res.data);
                    return res.data.data;
                })
                .then((res) => {
                    setProduct(res);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        useEffect(() => {
            fetchSingleProduct();
            // eslint-disable-next-line
        }, []);

        const props = {
            product,
            isLoading,
        };
        return <Component {...props} />;
    };
    return WithStateComponents;
};

export default Product;
