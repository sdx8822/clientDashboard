import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { CartsService } from './shared/services';
import { ProductsService } from './shared/services/products.service';
import { UsersService } from './shared/services';
import { LoginService } from './core/services/login.service';

import { MaterialModule } from './core/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { NavigationMenuModule } from './modules/navigation-menu/navigation-menu.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NavigationMenuModule,
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
