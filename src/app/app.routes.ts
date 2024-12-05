import { Routes } from '@angular/router';
import { ViewHomeComponent } from './views/view-home/view-home.component';
import { ViewPerfilComponent } from './views/view-perfil/view-perfil.component';
import { ViewGestionAmbienteComponent } from './views/view-gestion-ambiente/view-gestion-ambiente.component';

export const routes: Routes = [
  { path: '', component: ViewHomeComponent }, 
  { path: 'perfiles', component: ViewPerfilComponent }, 
  { path: 'ambientes', component: ViewGestionAmbienteComponent }, 
];
