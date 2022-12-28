import { Component, OnInit } from '@angular/core';
import { IProduct } from '../services/products.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { showCart } from '../store/actions/cart.actions';


@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {

  cart$: Observable<any[]> = this.store.select('cartProd')
  constructor(private store: Store<{ cartProd: any[] }>) {
  }

  ngOnInit(): void {
    console.log(this.cart$)
    this.showCart();
  }

  showCart(): void {
    this.store.dispatch(showCart());
  }

}
