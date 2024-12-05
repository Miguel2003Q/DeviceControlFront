import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { GestionAmbienteComponent } from '../../components/gestion-ambiente/gestion-ambiente.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-view-gestion-ambiente',
  imports: [NavComponent, GestionAmbienteComponent, FooterComponent],
  templateUrl: './view-gestion-ambiente.component.html',
  styleUrl: './view-gestion-ambiente.component.css'
})
export class ViewGestionAmbienteComponent {

}
