import { Routes } from '@angular/router';
import { ViewHomeComponent } from './views/view-home/view-home.component';
import { ViewPerfilComponent } from './views/view-perfil/view-perfil.component';
import { ViewGestionAmbienteComponent } from './views/view-gestion-ambiente/view-gestion-ambiente.component';
import { ViewAuthComponent } from './views/view-auth/view-auth.component';
import { ViewAdminComponent } from './views/view-admin/view-admin.component';

export const routes: Routes = [
  { path: '', component: ViewHomeComponent }, 
  { path: 'perfiles', component: ViewPerfilComponent }, 
  { path: 'ambientes', component: ViewGestionAmbienteComponent },
  { path: 'login', component: ViewAuthComponent },
  { path: 'register', component: ViewAdminComponent }
];

