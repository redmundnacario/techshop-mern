import axios from "axios";
import { productListTypes, productDetailsTypes } from "./product.types";

export const getlistProducts = () => async (dispatch) => {
    try {
        dispatch({ type: productListTypes.PRODUCT_LIST_REQUEST });

        const { data } = await axios("/api/v1/products");

        dispatch({
            type: productListTypes.PRODUCT_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        console.log(error.response.data);
        console.log(error.response.data.message);
        console.log(error.message);
        dispatch({
            type: productListTypes.PRODUCT_LIST_FAIL,
            payload:
                error.response && error.response.data.error
                    ? error.response.data.error
                    : error.message,
        });
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: productDetailsTypes.PRODUCT_DETAILS_REQUEST });

        const { data } = await axios(`/api/v1/products/${id}`);
        dispatch({
            type: productDetailsTypes.PRODUCT_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: productDetailsTypes.PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.error
                    ? error.response.data.error
                    : error.message,
        });
    }
};

export const resetProductDetails = () => async (dispatch) => {
    dispatch({ type: productDetailsTypes.PRODUCT_DETAILS_RESET });
};
