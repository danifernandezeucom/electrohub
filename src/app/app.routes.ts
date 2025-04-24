
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { CartComponent } from './components/cart/cart.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product-detail/:slug', component: ProductDetailComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: NotFoundComponent   }

];
