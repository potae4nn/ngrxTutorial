import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers/counter.reducer';
import { cartReducer } from './cart/cart.reducer'
import { MyCounterComponent } from './my-counter/my-counter.component';
import { CounterIIComponent } from './counter-ii/counter-ii.component';
import { MyCartComponent } from './cart/my-cart/my-cart.component';
import { ProductsComponent } from './products/products.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffect } from './store/effects/products.effects';
import { productReducer } from './store/reducers/product.reducer';
import { cartProdReducer } from './store/reducers/cart.reducer';
import { CartProductComponent } from './cart-product/cart-product.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    CounterIIComponent,
    MyCartComponent,
    ProductsComponent,
    CartProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([ProductsEffect]),
    StoreModule.forRoot({ count: counterReducer, cart: cartReducer, products: productReducer, cartProd: cartProdReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
