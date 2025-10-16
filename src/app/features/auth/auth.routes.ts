import { Routes } from "@angular/router";

export const authRoutes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.routes').then(c => c.adminAuthRoutes)
    },
    {
        path: 'user',
        loadChildren: () => import('./client/client.route').then(c => c.clientAuthRoutes)
    },
    {
        path: '', redirectTo: '/auth/user/login', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: '/auth/user/login' // perlu not-found page
    }
];