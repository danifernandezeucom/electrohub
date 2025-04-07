import { Routes } from '@angular/router';
import {ProductComponent} from './pages/product/product.component';
import {ProductDetailComponent} from './pages/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
  {
    path: 'product-detail/:id',
    component:ProductDetailComponent,
  }
];
