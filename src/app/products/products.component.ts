import { Component, OnInit } from '@angular/core';
import { IProduct } from '../services/products.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProducts } from '../store/actions/product.actions';
import { addToCart } from '../store/actions/cart.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<IProduct[]> = this.store.select('products');
  constructor(private store: Store<{ products: IProduct[]}>) {
  }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(): void {
    this.store.dispatch(getProducts())
  }

  addCart(id: number): void {
    this.store.dispatch(addToCart({ id }));
  }

}
