import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'entry', loadChildren: () => import('./pages/entry/entry.module').then(m => m.EntryModule) },
  { path: 'setting', loadChildren: () => import('./pages/setting/setting.module').then(m => m.SettingModule) },
  { path: 'finance', loadChildren: () => import('./pages/finance/finance.module').then(m => m.FinanceModule) },
  { path: 'management', loadChildren: () => import('./pages/management/management.module').then(m => m.ManagementModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule { }