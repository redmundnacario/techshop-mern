import React from "react";
import { useSelector } from "react-redux";

const CartNavbar = (Component) => {
    const WithComponents = ({ history, location, match }) => {
        const itemNumber = useSelector((state) =>
            state.cart.cartItems.reduce((acc, item) => acc + item.quantity, 0)
        );

        return <Component itemNumber={itemNumber} />;
    };

    return WithComponents;
};
export default CartNavbar;
