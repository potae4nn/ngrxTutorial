import { createReducer, on } from '@ngrx/store';
import { add,remove,reset } from './cart.actions';

export const initialState = 0;

console.log(initialState)
export const cartReducer = createReducer(
  initialState,
  on(add, (state) => state + 1),
  on(remove, (state) => state - 1),
  on(reset, (state) => state = 0)
);