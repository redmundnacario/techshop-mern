import React from "react";
import { Link } from "react-router-dom";
import AlertMessage from "../common/AlertMessage";
import CartPageView from "./CartPageView";

const CartPageController = (props) => {
    const { cartItems } = props;

    if (cartItems.length === 0) {
        return (
            <AlertMessage variant="info">
                There is nothing in your Cart.&nbsp;
                <Link Link to="/">
                    Go Shop.
                </Link>
            </AlertMessage>
        );
    }

    return <CartPageView {...props} />;
};

export default CartPageController;
