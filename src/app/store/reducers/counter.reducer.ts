import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, multiply } from '../actions/counter.actions';

export const initialState = 0;

console.log(initialState)
export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(multiply, (state) => state * 2),
  on(reset, (state) => state = 0)
);