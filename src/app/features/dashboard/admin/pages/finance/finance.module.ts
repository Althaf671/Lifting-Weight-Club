import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { Finance } from './finance';


@NgModule({
  declarations: [
    Finance
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule
  ]
})
export class FinanceModule { }
