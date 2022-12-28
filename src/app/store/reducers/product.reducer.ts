import { getProductsSuccess } from "../actions/product.actions";
import { IProduct } from "src/app/services/products.service";
import { createReducer, on } from "@ngrx/store";

const initialState: Readonly<IProduct[]> = [];

export const productReducer = createReducer(
    initialState,
    on(getProductsSuccess, (state, { products }) => [...products])
)