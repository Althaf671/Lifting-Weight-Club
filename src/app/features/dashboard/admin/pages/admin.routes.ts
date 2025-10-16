import { Routes } from "@angular/router";

export const dashboardAdmin: Routes = [
    {
        path: 'main',
        loadComponent: () => import('./main/main').then(c => c.Main),
        title: 'Admin Dashboard • LWC'
    },
    {
        path: 'finance',
        loadComponent: () => import('./finance/finance').then(c => c.Finance),
        title: 'Admin Finance Dashboard • LWC'
    },
    {
        path: 'management',
        loadComponent: () => import('./management/management').then(c => c.Management),
        title: 'Admin Management Dashboard • LWC'
    },
    {
        path: 'setting',
        loadComponent: () => import('./setting/setting').then(c => c.Setting),
        title: 'Admin Setting Dashboard • LWC'
    },
    {
        path: '', redirectTo: '/auth/user/login', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: '/auth/user/login'
    }
];