import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { PerfilComponent } from '../../components/perfil/perfil.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-view-perfil',
  imports: [NavComponent, PerfilComponent, FooterComponent],
  templateUrl: './view-perfil.component.html',
  styleUrl: './view-perfil.component.css'
})
export class ViewPerfilComponent {

}
