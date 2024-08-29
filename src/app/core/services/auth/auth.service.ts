import { Injectable } from '@angular/core';
import { BaseHttpClient } from "../../data-access/base-http";
import SigIn from '../../interfaces/auth/sign-in.interface';
import { Observable } from 'rxjs';
import LoginResponse from '../../interfaces/auth/login-response.interface';

@Injectable()
export default class AuthService extends BaseHttpClient {

  // ! handling login and return response
  login(data: SigIn): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { email: data.email, password: data.password });
  }

  isAuthenticated(): boolean {
    return true
  }
}
