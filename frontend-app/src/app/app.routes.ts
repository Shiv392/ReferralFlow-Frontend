import { Routes } from '@angular/router';
import {auth_routes} from './routes/authentication.routes';

export const routes: Routes = [
    {
        path : '',
        pathMatch : 'full',
        loadComponent: ()=> import('./features/home/home')
        .then(component=> component.Home)
    },
    {
        path : 'auth', 
        children : auth_routes
    },
    {
        path : '**',
        pathMatch : 'full',
        redirectTo : ''
    }
];
