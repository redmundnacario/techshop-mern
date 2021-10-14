// ADD ITEM: find same item in the card, if none add the item, add total cost

export const addItem = (cart, newItem) => {
    // find item

    const itemExists = cart.find((item) => item._id === newItem._id);

    if (itemExists) {
        return cart.map((item) => {
            return item._id === itemExists._id
                ? { ...item, quantity: itemExists.quantity + newItem.quantity }
                : item;
        });
    }

    return [...cart, { ...newItem }];
};

// REMOVE ITEM: find the item and remove it

export const removeItem = (cart, payload) => {
    const { itemId, quantity } = payload;

    // find item
    const itemToBeRemoved = cart.find((item) => item._id === itemId);

    if (itemToBeRemoved.quantity === quantity) {
        return cart.filter((item) => item._id !== itemToBeRemoved._id);
    }

    return cart.map((item) => {
        return item._id === itemToBeRemoved._id
            ? { ...item, quantity: item.quantity - quantity }
            : item;
    });
};
