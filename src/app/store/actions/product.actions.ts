import { createAction, props } from "@ngrx/store";
import { IProduct } from '../../services/products.service';

export const getProducts = createAction('[Product] Get product');
export const getProductsSuccess = createAction(
    '[Product] Get product success',
    // (products: Readonly<IProduct[]>) => products
    props<{products: Readonly<IProduct[]>}>()
);
export const addProductsSuccess = createAction(
    '[Product] Add product success',
    props<{ product: IProduct }>
);