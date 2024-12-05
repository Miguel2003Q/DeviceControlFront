import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientHttpService } from '../../services/client-http.service';

@Component({
  selector: 'app-perfil',
  imports:[CommonModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  constructor(private clientHttp: ClientHttpService) {}

  activos: any;

  profiles = [
    {
      name: 'Juan Pérez',
      devices: [
        { name: 'Dispositivo 1', data: 'Información adicional del dispositivo 1' }
      ]
    },
    {
      name: 'Ana Gómez',
      devices: [
        { name: 'Dispositivo 2', data: 'Información adicional del dispositivo 2' }
      ]
    },
    {
      name: 'Carlos Ruiz',
      devices: [
        { name: 'Dispositivo 3', data: 'Información adicional del dispositivo 3' }
      ]
    }
  ];

  ngOnInit(): void {
    this.clientHttp.get(`/activos`)
    .subscribe({
      next: (response: any) => {
        this.activos = response;
      },
      error: (error) => console.error('Error:', error)
    });
  }
}