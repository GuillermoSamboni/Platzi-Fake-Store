import { Injectable } from '@angular/core';
import { BaseHttpClient } from "../../data-access/base-http";

@Injectable({
  providedIn: 'root'
})
export default class AuthService extends BaseHttpClient {
  // handling login and return response
  login(username: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  isAuthenticated(): boolean {
    return true
  }
}
