import { Routes } from '@angular/router';
import { Cart } from './cart/cart';
import { Main } from './main/main';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'cart', component: Cart },
];
