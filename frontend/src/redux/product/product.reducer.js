import { productListTypes, productDetailsTypes } from "./product.types";

export const productListReducer = (state = { products: {} }, action) => {
    switch (action.type) {
        case productListTypes.PRODUCT_LIST_REQUEST:
            return { loading: true, products: {} };
        case productListTypes.PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload };
        case productListTypes.PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case productDetailsTypes.PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state };
        case productDetailsTypes.PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload };
        case productDetailsTypes.PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        case productDetailsTypes.PRODUCT_DETAILS_RESET:
            return { loading: false, product: {} };
        default:
            return state;
    }
};
