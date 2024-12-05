import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientHttpService } from '../../services/client-http.service';

@Component({
  selector: 'app-gestion-ambiente',
  imports:[CommonModule, RouterModule],
  templateUrl: './gestion-ambiente.component.html',
  styleUrls: ['./gestion-ambiente.component.css']
})
export class GestionAmbienteComponent {
  // ambientes = [
  //   { name: 'Ambiente 1', available: true },
  //   { name: 'Ambiente 2', available: false },
  //   { name: 'Ambiente 3', available: true },
  //   { name: 'Ambiente 4', available: false }
  // ];

  instructores: any;
  ambientes: any;

  constructor(private clientHttp: ClientHttpService) {}

  ngOnInit(): void {
    this.clientHttp.get(`/instructores`)
    .subscribe({
      next: (response: any) => {
        this.instructores = response;
      },
      error: (error) => console.error('Error:', error)
    });

    this.clientHttp.get(`/ambientes`)
    .subscribe({
      next: (response: any) => {
        this.ambientes = response;
      },
      error: (error) => console.error('Error:', error)
    });
  }
}
