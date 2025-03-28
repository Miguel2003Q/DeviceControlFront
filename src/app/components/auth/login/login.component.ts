import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email: string = this.loginForm.value.email;
      const password: string = this.loginForm.value.password;
      
      // Simulación de usuarios y roles
      const users: { [key: string]: string } = {
        'admin@example.com': 'ADMIN',
        'instructor@example.com': 'INSTRUCTOR',
        'almacen@example.com': 'ALMACEN',
        'vigilante@example.com': 'VIGILANTE'
      };

      const role = users[email];

      if (role) {
        this.authService.login(role);
      } else {
        alert('Correo o contraseña incorrectos');
      }
    }
  }
}
