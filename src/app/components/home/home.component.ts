import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports:[CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  devices = [
    {
      name: 'Dispositivo 1',
      owner: 'Juan Pérez',
      ownerData: 'Dirección: Calle 123, Teléfono: 123456789',
    },
    {
      name: 'Dispositivo 2',
      owner: 'Ana Gómez',
      ownerData: 'Dirección: Calle 456, Teléfono: 987654321',
    },
    {
      name: 'Dispositivo 3',
      owner: 'Carlos Ruiz',
      ownerData: 'Dirección: Calle 789, Teléfono: 456123789',
    }
  ];
}