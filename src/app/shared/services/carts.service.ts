import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, ReplaySubject, map, shareReplay, tap } from 'rxjs';

import { environment } from 'src/environments/environment.development';
import { CartModel, ProductModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  private baseUrl = `${environment.baseUrl}carts`;

  constructor(private http: HttpClient) { }

  getCarts(): Observable<CartModel[]> {
    return this.http.get<CartModel[]>(this.baseUrl)
      .pipe(map((carts: CartModel[]) => carts.map((cart: CartModel) => new CartModel(cart))));
  }

  getCart(id: number): Observable<CartModel> {
    return this.http.get<CartModel>(`${this.baseUrl}/${id}`)
      .pipe(map((cart: CartModel) => new CartModel(cart)));
  }


  //~~~~~ Filters start ~~~~~//

  getCartsLimited(limit: string): Observable<CartModel[]> {
    return this.http.get<CartModel[]>(`${this.baseUrl}?limit=${limit}`)
      .pipe(map((carts: CartModel[]) => carts.map((cart: CartModel) => new CartModel(cart))));
  }

  getCartsSorted(sortBy: string): Observable<CartModel[]> {
    return this.http.get<CartModel[]>(`${this.baseUrl}?sort=${sortBy}`)
      .pipe(map((carts: CartModel[]) => carts.map((cart: CartModel) => new CartModel(cart))));
  }

  getCartsInDateRange(startDate: string, endDate: string): Observable<CartModel[]> {
    return this.http.get<CartModel[]>(`${this.baseUrl}?startdate=${startDate}&enddate=${endDate}`)
      .pipe(map((carts: CartModel[]) => carts.map((cart: CartModel) => new CartModel(cart))));
  }

  getCartsByUserId(userId: number): Observable<CartModel> {
    return this.http.get<CartModel>(`${this.baseUrl}/user/${userId}`)
      .pipe(map((cart: CartModel) => new CartModel(cart)));
  }

  //~~~~~ Filters end ~~~~~//



  //~~~~~ Actions start ~~~~~//

  addToCart(userId: number, date: string, products: ProductModel[]): Observable<void> {
    const addObj = { userId, date, products};

    return this.http.post<void>(this.baseUrl, JSON.stringify(addObj))
      .pipe(map((addResult) => {
        console.log({addResult});
      }));
  }

  updateCart(userId: number, date: string, products: ProductModel[]): Observable<void> {
    const addObj = { userId, date, products };

    return this.http.put<void>(this.baseUrl, JSON.stringify(addObj))
      .pipe(map((updateResult) => {
        console.log({updateResult});
      }));    
  }

  deleteCart(cartId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${cartId}}`)
      .pipe(map((deleteResult) => {
        console.log({deleteResult});
      }));    
  }
  //~~~~~ Actions end ~~~~~//
}
