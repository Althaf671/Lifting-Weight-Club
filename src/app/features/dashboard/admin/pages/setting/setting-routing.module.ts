import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Setting } from './setting';

const routes: Routes = [{ path: '', component: Setting }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
