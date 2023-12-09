import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, ReplaySubject, map, shareReplay, tap } from 'rxjs';

import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl: string = `${environment.baseUrl}auth`;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<void> {
    const userObj = { username, password };

    return this.http.post(`${this.baseUrl}/login`, JSON.stringify(userObj))
      .pipe(map((loginResult) => console.log({loginResult})));
  }
}
