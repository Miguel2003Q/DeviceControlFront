/*
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
  */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  email: string;
  rol: string;
  exp: number;
  [key: string]: any; // por si hay otros datos
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api'; // Cambia esto a la URL de tu backend

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);

    // Decodificar el token y guardar info extra
    const decoded = jwtDecode<JwtPayload>(token);
    localStorage.setItem('email', decoded.email);
    localStorage.setItem('rol', decoded.rol);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserEmail(): string | null {
    return localStorage.getItem('email');
  }

  getUserRole(): string | null {
    return localStorage.getItem('rol');
  }

  isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) return true;

    const decoded = jwtDecode<JwtPayload>(token);
    const now = Math.floor(Date.now() / 1000);
    return decoded.exp < now;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('rol');
  }

  isLoggedIn(): boolean {
    return !!this.getToken() && !this.isTokenExpired();
  }
}