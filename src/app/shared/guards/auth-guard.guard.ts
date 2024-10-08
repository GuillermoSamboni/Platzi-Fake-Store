import { inject, Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import AuthService from "@core/services/auth/auth.service";

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
