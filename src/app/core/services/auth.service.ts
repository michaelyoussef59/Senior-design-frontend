import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const endpoint = `${AUTH_API}/login`;

    return this.http.post(
      endpoint,
      {
        email,
        password,
      },
      httpOptions
    );
  }

  // logout(): Observable<any> {

  //   return this.http.post(AUTH_API + 'signout', {}, httpOptions);
  // }
}
