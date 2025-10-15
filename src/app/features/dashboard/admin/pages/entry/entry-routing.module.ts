import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Entry } from './entry';

const routes: Routes = [{ path: '', component: Entry }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryRoutingModule { }
