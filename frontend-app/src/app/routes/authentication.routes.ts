import { Routes } from "@angular/router";

export const auth_routes: Routes = [
    {
        path : '',
        redirectTo : 'login',
        pathMatch : 'full'
    },
    {
        path : 'login', 
        pathMatch : 'full',
        loadComponent : ()=> import('../features/authentication/login/login')
        .then(comp=> comp.Login)
    },
    {
        path : 'signup',
        pathMatch : 'full',
        loadComponent: ()=> import('../features/authentication/signup/signup')
        .then(comp=> comp.Signup)
    }
]