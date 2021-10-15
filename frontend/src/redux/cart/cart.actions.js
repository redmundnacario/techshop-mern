import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "./cart.types";

export const addItemToCart = (item, quantity) => async (dispatch, getState) => {
    dispatch({
        type: ADD_ITEM_TO_CART,
        payload: { ...item, quantity },
    });
    localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
    );
};

export const removeItemFromCart =
    (itemId, quantity) => async (dispatch, getState) => {
        dispatch({
            type: REMOVE_ITEM_FROM_CART,
            payload: { itemId },
        });
        localStorage.setItem(
            "cartItems",
            JSON.stringify(getState().cart.cartItems)
        );
    };
