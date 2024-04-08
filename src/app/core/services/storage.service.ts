import { Injectable } from '@angular/core';
import { Token } from '../models/token.model';

const TOKEN_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: Token): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, JSON.stringify(token));
  }

  public isLoggedIn(): boolean {
    let tokenString = window.sessionStorage.getItem(TOKEN_KEY);

    if (tokenString) {
      let token = JSON.parse(tokenString);
      if (token && token.expiration) {
        let expirationTimeMilliseconds = token.expiration * 1000;
        let currentTimeMilliseconds = new Date().getTime();

        // Check if the current time is less than the expiration time
        if (currentTimeMilliseconds < expirationTimeMilliseconds) {
          return true; // Token is still valid
        }
      }
    }

    return false; // Token is expired or not found
  }
}
