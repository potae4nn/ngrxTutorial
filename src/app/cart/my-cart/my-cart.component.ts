import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { add, remove, reset } from '../cart.actions';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {
  cart$: Observable<number>;

  constructor(private store: Store<{ cart: number }>) { 
    this.cart$ = store.select('cart');
  }

  ngOnInit(): void {
  }

  add() {
    this.store.dispatch(add());
  }

  remove() {
    this.store.dispatch(remove());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
