import {
    CLEAR_CART,
    INCREASE,
    DECREASE,
    REMOVE,
    DISPLAY_ITEMS,
    LOADING,
} from "./actions";

const reducer = (state, action) => {
    if (action.type === CLEAR_CART) {
        return { ...state, cart: new Map() };
    }

    if (action.type === REMOVE) {
        const { id } = action.payload;

        const newCart = new Map(state.cart);
        newCart.delete(id); //blagodara Map mi imeem takuyu funkciyu

        return { ...state, cart: newCart };
    }

    if (action.type === INCREASE) {
        const { id } = action.payload;

        const newCart = new Map(state.cart);

        const item = newCart.get(id);

        const newItem = { ...item, amount: item.amount + 1 };

        newCart.set(id, newItem);

        return { ...state, cart: newCart };
    }

    if (action.type === DECREASE) {
        const { id } = action.payload;

        const newCart = new Map(state.cart);

        const item = newCart.get(id);

        if (item.amount > 1) {
            const newItem = { ...item, amount: item.amount - 1 };
            newCart.set(id, newItem);
        } else {
            newCart.delete(id);
        }

        return { ...state, cart: newCart };
    }

    if (action.type === LOADING) {
        return { ...state, loading: true };
    }

    if (action.type === DISPLAY_ITEMS) {
        const newCart = new Map(
            action.payload.cart.map((item) => [item.id, item])
        );

        return { ...state, loading: false, cart: newCart };
    }

    throw new Error(`no matching action type: ${action.type}`);
};

export default reducer;
