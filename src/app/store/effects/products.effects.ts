import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError,exhaustMap } from 'rxjs/operators';
import { ProductsService } from '../../services/products.service';
import {  getProducts,getProductsSuccess } from '../actions/product.actions'

@Injectable()
export class ProductsEffect {

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getProducts),
    exhaustMap(() => 
    this.productsService.getAll().pipe(
        map(products => getProductsSuccess({ products })),
        catchError(() => of({ type: '[Products API] Movies Loaded Error' }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}