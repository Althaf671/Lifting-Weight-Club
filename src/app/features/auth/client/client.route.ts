import { Routes } from "@angular/router";

export const clientAuthRoutes: Routes = [
    {
        path: 'register',
        loadComponent: () => import('./register/register').then(c => c.Register),
        title: 'Registration • LWC'
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login').then(c => c.Login),
        title: 'Login • LWC'
    },
    {
        path: 'verify-email',
        loadComponent: () => import('./verify-email/verify-email').then(c => c.VerifyEmail),
        title: 'Email Verification • LWC'
    },
    {
        path: 'two-factor',
        loadComponent: () => import('./two-factor/two-factor').then(c => c.TwoFactor),
        title: 'Two Factor Authentication • LWC'
    },
    {
        path: 'forgot-password',
        loadComponent: () => import('./forgot-password/forgot-password').then(c => c.ForgotPassword),
        title: 'Forgot Password • LWC'
    },
    {
        path: 'reset-password:id',
        loadComponent: () => import('./reset-password/reset-password').then(c => c.ResetPassword),
        title: 'Reset Password • LWC'
    },
    {
        path: '', redirectTo: '/auth/user/login', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: '/auth/user/login' // perlu not-found page
    }
];