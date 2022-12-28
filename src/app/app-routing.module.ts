import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterIIComponent } from './counter-ii/counter-ii.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MyCartComponent } from './cart/my-cart/my-cart.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'counterii', component: CounterIIComponent },
  { path: 'counter', component: MyCounterComponent },
  { path: 'cart', component: MyCartComponent },
  { path: 'product', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
