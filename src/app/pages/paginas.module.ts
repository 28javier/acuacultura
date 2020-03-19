import { NgModule } from '@angular/core';


// modulo del shared por que usa componentes de este
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EspeciesComponent } from './especies/especies.component';
import { PaginasComponent } from './paginas.component';

// rutas hija ojo
import { PAGINAS_ROUTES } from './paginas.routes';


@NgModule({
declarations: [
    PaginasComponent,
    DashboardComponent,
    UsuariosComponent,
    EspeciesComponent
],
exports: [
    PaginasComponent,
    DashboardComponent,
    UsuariosComponent,
    EspeciesComponent
],
imports: [
    SharedModule,
    PAGINAS_ROUTES
]
})

export class PaginasModule {}
