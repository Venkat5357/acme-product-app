import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { WelcomeComponent } from './home/welcome/welcome.component';
import {ProductModule} from './products/product.module';
import {RoutesModule} from './routes/routes.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
