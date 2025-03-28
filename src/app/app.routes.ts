import { Routes } from '@angular/router';
import { ViewHomeComponent } from './views/view-home/view-home.component';
import { ViewAuthComponent } from './views/view-auth/view-auth.component';
import { ViewGestionUsuariosComponent } from './views/view-gestion-usuarios/view-gestion-usuarios.component';
import { ViewGestionRolesComponent } from './views/view-gestion-roles/view-gestion-roles.component';
import { ViewGestionAmbienteComponent } from './views/view-gestion-ambiente/view-gestion-ambiente.component';
import { ViewGestionActivosComponent } from './views/view-gestion-activos/view-gestion-activos.component';
import { ViewGestionTrasladosComponent } from './views/view-gestion-traslados/view-gestion-traslados.component';
import { ViewGestionReportesComponent } from './views/view-gestion-reportes/view-gestion-reportes.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: ViewHomeComponent },
  { path: 'login', component: ViewAuthComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', redirectTo: '' },
  
  { path: 'usuarios', component: ViewGestionUsuariosComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'roles', component: ViewGestionRolesComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'ambientes', component: ViewGestionAmbienteComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'ambientes/activos', component: ViewGestionActivosComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'ambientes/traslados', component: ViewGestionTrasladosComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] } },
  { path: 'activos', component: ViewGestionActivosComponent, canActivate: [AuthGuard], data: { roles: ['INSTRUCTOR', 'ALMACEN', 'VIGILANTE'] } },
  { path: 'traslados', component: ViewGestionTrasladosComponent, canActivate: [AuthGuard], data: { roles: ['INSTRUCTOR', 'ALMACEN', 'VIGILANTE'] } },
  { path: 'reportes', component: ViewGestionReportesComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN', 'VIGILANTE'] } }
];
