import { createAction, props } from "@ngrx/store";
import { IProduct } from '../../services/products.service';

export const addToCart = createAction(
    '[Product List] Add to cart',
    props<{ id: number }>()
)
export const showCart = createAction(
    '[Product List] Get to cart'
)

export const removeFromCart = createAction(
    '[Product List] Remove from cart',
    props<{ id: number }>()
)