import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, ReplaySubject, map, shareReplay, tap } from 'rxjs';

import { environment } from 'src/environments/environment.development';
import { UserModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl: string = `${environment.baseUrl}users`

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.baseUrl)
      .pipe(map((users: UserModel[]) => users.map((user: UserModel) => new UserModel(user))));
  }

  getUser(userId: number): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.baseUrl}/${userId}`)
      .pipe(map((user: UserModel) => new UserModel(user)));
  }


  //~~~~~ Filters start ~~~~~//  

  getUsersLimited(limit: number): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.baseUrl}?limit=${limit}`)
      .pipe(map((users: UserModel[]) => users.map((user: UserModel) => new UserModel(user))));
  }

  getUsersSorted(sortBy: string): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.baseUrl}?sort=${sortBy}`)
      .pipe(map((users: UserModel[]) => users.map((user: UserModel) => new UserModel(user))));
  }
  //~~~~~ Filters end ~~~~~//



  //~~~~~ Actions start ~~~~~//

  addUser(user: UserModel): Observable<void> {
    return this.http.post<void>(this.baseUrl, JSON.stringify(user))
      .pipe(map((addResult) => console.log({addResult})));
  }

  updateUser(userId: number, user: UserModel): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${userId}`, JSON.stringify(user))
      .pipe(map((updateResult) => console.log({updateResult})));
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${userId}`)
      .pipe(map((deleteResult) => console.log({deleteResult})));
  }

  //~~~~~ Actions end ~~~~~//
}
