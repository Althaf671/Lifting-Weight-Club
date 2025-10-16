import { Routes } from "@angular/router";

export const adminAuthRoutes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./login/login').then(c => c.Login),
        title: 'Login Admin • LWC'
    },
    {
        path: 'two-factor',
        loadComponent: () => import('./two-factor/two-factor').then(c => c.TwoFactor),
        title: 'Two Factor Authentication Admin • LWC'
    },
    {
        path: '', redirectTo: '/auth/user/login', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: '/auth/user/login' // perlu not-found page
    }
];