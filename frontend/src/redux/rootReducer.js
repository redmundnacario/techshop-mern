import { combineReducers } from "redux";

import { productListReducer, productReducer } from "./product/product.reducer";

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productReducer,
});

export default rootReducer;
