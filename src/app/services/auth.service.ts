import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private roleSubject = new BehaviorSubject<string | null>(this.getUserRole());
  role$ = this.roleSubject.asObservable();

  constructor(private router: Router) {}

  login(role: string) {
    localStorage.setItem('userRole', role);
    localStorage.setItem('token', 'FAKE_TOKEN');
    this.roleSubject.next(role);
    this.redirectUser(role);
  }

  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }

  getUser() {
    return { token: localStorage.getItem('token'), role: this.getUserRole() };
  }

  logout() {
    localStorage.clear();
    this.roleSubject.next(null);
    alert('Sesión cerrada');
    this.router.navigate(['/login']);
  }

  redirectUser(role: string) {
    const routesByRole: { [key: string]: string } = {
      'ADMIN': '/usuarios',
      'INSTRUCTOR': '/activos',
      'ALMACEN': '/activos',
      'VIGILANTE': '/reportes'
    };
    this.router.navigate([routesByRole[role] || '/unauthorized']);
  }
}
