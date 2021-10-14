import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "./cart.types";
import { addItem, removeItem } from "./cart.utils";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addItem(state.cartItems, action.payload),
            };
        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeItem(state.cartItems, action.payload),
            };

        default:
            return state;
    }
};
