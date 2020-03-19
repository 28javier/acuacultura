import { Routes, RouterModule } from '@angular/router';

import { PaginasComponent } from './paginas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EspeciesComponent } from './especies/especies.component';
import { UsuariosComponent } from './usuarios/usuarios.component';




const paginasRoutes: Routes = [
    {path: '',
 component: PaginasComponent,
 children: [
    {path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard'}},
    {path: 'especies', component: EspeciesComponent, data: { titulo: 'Especies'}},
    {path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Usuarios'}},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
]
}
];

export const PAGINAS_ROUTES = RouterModule.forChild(paginasRoutes);
