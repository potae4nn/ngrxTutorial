import { addToCart, removeFromCart, showCart } from "../actions/cart.actions";
import { createReducer, on } from "@ngrx/store";

export interface State {
    cartItems: { [id: number]: number }
}
export const initialState: State = {
    cartItems: {},
}

export const cartProdReducer = createReducer(
    initialState,
    on(addToCart, (state, action) => ({
        ...state,
        cartItems: {
            ...state.cartItems,
            [action.id]: (state.cartItems[action.id] || 0) + 1,
        },
    })),
    on(showCart, (state) => state),
    on(removeFromCart, (state, action) => ({
        ...state,
        cartItems: {
            ...state.cartItems,
            [action.id]: (state.cartItems[action.id] || 0) + 1,
        },
    })),
)