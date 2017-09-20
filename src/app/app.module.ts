import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';
import {ProductsService} from "./products/products.service";
import {HttpClientModule} from "@angular/common/http";
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductsListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'products' , component:ProductsListComponent },
      {path:'products/:id', component:ProductDetailComponent},
      {path:'welcome' ,component:WelcomeComponent},
      {path:'',redirectTo:'welcome', pathMatch:'full'},
      {path:'**',redirectTo:'welcome', pathMatch:'full'}

    ])
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
