import { LoginComponent } from '../pages/login/login.component';

export const routes = [ { path: 'login', component: LoginComponent }, { path: '**', redirectTo: 'login' } ];
