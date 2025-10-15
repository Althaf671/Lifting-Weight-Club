import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Finance } from './finance';

const routes: Routes = [{ path: '', component: Finance }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
