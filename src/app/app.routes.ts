import { Routes } from '@angular/router';
import { ViewHomeComponent } from './views/view-home/view-home.component';
import { ViewPerfilComponent } from './views/view-perfil/view-perfil.component';
import { ViewGestionAmbienteComponent } from './views/view-gestion-ambiente/view-gestion-ambiente.component';
import { ViewLoginComponent } from './views/view-login/view-login.component';
import { ViewRegisterComponent } from './views/view-register/view-register.component';

export const routes: Routes = [
  { path: '', component: ViewHomeComponent }, 
  { path: 'perfiles', component: ViewPerfilComponent }, 
  { path: 'ambientes', component: ViewGestionAmbienteComponent },
  { path: 'login', component: ViewLoginComponent},
  { path: 'register', component: ViewRegisterComponent} 
];

