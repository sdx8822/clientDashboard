import { Component } from '@angular/core';

import { CartsService, ProductsService, UsersService } from './shared/services';
import { CartModel, ProductModel, UserModel } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clientDashboard';

  constructor(private cartsService: CartsService,
              private productsService: ProductsService,
              private usersService: UsersService) {

  }

  ngOnInit() {
    this.productsService.getProducts()
      .subscribe((products: ProductModel[]) => {
        console.log({products});
      });

    this.cartsService.getCarts()
      .subscribe((carts: CartModel[]) => {
        console.log({carts});
      });

    this.usersService.getUsers()
      .subscribe((users: UserModel[]) => {
        console.log({users});
      });
  }
}
