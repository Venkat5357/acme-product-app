import { NgModule } from '@angular/core';
import {ProductsListComponent} from './products-list/products-list.component';
import {ProductDetailComponent} from './product-detail.component';
import {RouterModule} from '@angular/router';
import {ProductGuardService} from './product-guard/product-guard.service';
import {ProductsService} from './products.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'products' , component: ProductsListComponent },
      {path: 'products/:id',
        canActivate: [ProductGuardService],
        component: ProductDetailComponent},
    ]),
    SharedModule
  ],
  declarations: [
    ProductsListComponent,
    ProductDetailComponent
  ],
  providers: [
    ProductsService,
    ProductGuardService
  ]
})
export class ProductModule { }
