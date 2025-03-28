import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../services/auth.service'; 
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  imports: [CommonModule],
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  role: string | null = null;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private cdRef: ChangeDetectorRef // Inyectamos ChangeDetectorRef para que se guarden correctamente los cambios. 
  ) {}

  ngOnInit(): void {
    this.authService.role$.subscribe((role: string | null) => {
      this.role = role;
      console.log("Role actual:", this.role); // Verifica si el rol se está actualizando
      this.cdRef.detectChanges(); // Forzamos la actualización del DOM
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
