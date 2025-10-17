import { Routes } from "@angular/router";

export const dashboardClient: Routes = [
    {
        path: 'main',
        loadComponent: () => import('./pages/main/main').then(c => c.Main),
        title: 'Your Dashboard • LWC'
    },
    {
        path: 'management',
        loadComponent: () => import('./pages/management/management').then(c => c.Management),
        title: 'Manage Plan • LWC'
    },
    {
        path: 'notification',
        loadComponent: () => import('./pages/notification/notification').then(c => c.Notification),
        title: 'Notification Logs • LWC'
    },
    {
        path: 'setting',
        loadComponent: () => import('./pages/setting/setting').then(c => c.Setting),
        title: 'Setting Panel • LWC'
    },
    {
        path: '', redirectTo: '/auth/user/login', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: '/auth/user/login' // perlu not-found page
    }
];