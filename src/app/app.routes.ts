import { Routes, RouterModule } from '@angular/router';




import { LoginComponent } from './login/login.component';

import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';



const approutes: Routes = [
{path: 'login', component: LoginComponent},
{path: 'register', component: LoginComponent},
{path: '**', component: NopagefoundComponent}
];
export const APP_ROUTE = RouterModule.forRoot (approutes, {useHash: true});
