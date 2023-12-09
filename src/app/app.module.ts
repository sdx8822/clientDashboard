import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CartsService } from './shared/services';
import { ProductsService } from './shared/services/products.service';
import { UsersService } from './shared/services';
import { LoginService } from './core/services/login.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './modules/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CartsService,
    ProductsService,
    UsersService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
