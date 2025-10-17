import { Routes } from "@angular/router";

export const dashboardRoutes: Routes = [
    {
        path: 'admin:id',
        loadChildren: () => import('./admin/pages/admin.routes').then(m => m.dashboardAdmin)
    },
    {
        path: 'user:id',
        loadChildren: () => import('./client/client.routes').then(m => m.dashboardClient)
    },
    {
        path: '', redirectTo: '/auth/user/login', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: '/auth/user/login' // perlu not-found page
    }
];