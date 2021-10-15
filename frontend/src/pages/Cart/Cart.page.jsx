import React from "react";
import Cart from "../../containers/Cart.container";
import CartPageController from "../../components/cart/CartPageController";

const CartPage = (props) => {
    const cartContents = CartPageController(props);
    return (
        <div>
            <h1>Shopping Cart</h1>
            {cartContents}
        </div>
    );
};

export default Cart(CartPage);
