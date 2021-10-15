import React from "react";

import { addItemToCart, removeItemFromCart } from "../redux/cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";

const Cart = (Component) => {
    const WithStateComponents = ({ history, match }) => {
        const dispatch = useDispatch();
        const { cartItems } = useSelector((state) => state.cart);

        const addItemToCartHandler = (e, item, quantity) => {
            e.preventDefault();
            dispatch(addItemToCart(item, parseInt(quantity)));
        };

        const removeItemFromCartHandler = (e, itemId) => {
            e.preventDefault();
            dispatch(removeItemFromCart(itemId));
        };

        const props = {
            cartItems,
            addItemToCartHandler,
            removeItemFromCartHandler,
        };
        return <Component {...props} />;
    };

    return WithStateComponents;
};

export default Cart;
