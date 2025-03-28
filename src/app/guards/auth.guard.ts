import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.authService.getUser();
    if (!user.token) {
      this.router.navigate(['/login']);
      return false;
    }
    if (route.data['roles'] && !route.data['roles'].includes(user.role || '')) {
      this.router.navigate(['/unauthorized']);
      return false;
    }
    return true;
  }
}