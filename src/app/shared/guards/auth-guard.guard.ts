import { inject, Injectable } from "@angular/core";
import AuthService from "../../core/services/auth/auth.service";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  private authService = inject(AuthService)
  constructor(private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['categories-list']);
    return false;
  }
}
