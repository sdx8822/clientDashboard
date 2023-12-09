import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, ReplaySubject, map, shareReplay, tap } from 'rxjs';

import { environment } from 'src/environments/environment.development';
import { ProductModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl: string = `${environment.baseUrl}products`;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.baseUrl}`)
      .pipe(map((products: ProductModel[]) => products.map((product: ProductModel) => new ProductModel(product))));
  }

  getProduct(id: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.baseUrl}/${id}`)
      .pipe(map((product: ProductModel) => new ProductModel(product)));
  }


  //~~~~~ Filters start ~~~~~//

  getProductsLimited(limit: string): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.baseUrl}?limit=${limit}`)
      .pipe(map((products: ProductModel[]) => products.map((product: ProductModel) => new ProductModel(product))));
  }

  getProductsSorted(sortBy: string): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.baseUrl}?sort=${sortBy}`)
      .pipe(map((products: ProductModel[]) => products.map((product: ProductModel) => new ProductModel(product))));
  }

  getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/categories`)
      .pipe(map((categories: string[]) => categories));
  }

  getProductsByCategory(category: string): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.baseUrl}/categories/${category}`)
      .pipe(map((products: ProductModel[]) => products.map((product: ProductModel) => new ProductModel(product))));
  }

  //~~~~~ Filters end ~~~~~//



  //~~~~~ Actions start ~~~~~//

  addProduct(product: ProductModel): Observable<void> {
    return this.http.post<void>(this.baseUrl, JSON.stringify(product))
      .pipe(map((addResult) => {
        console.log({addResult});
      }));
  }

  updateProduct(product: ProductModel): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${product.id}`, JSON.stringify(product))
      .pipe(map((updateResult) => {
        console.log({updateResult});
      }));    
  }

  deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${productId}}`)
      .pipe(map((deleteResult) => {
        console.log({deleteResult});
      }));    
  }
  //~~~~~ Actions end ~~~~~//
}
