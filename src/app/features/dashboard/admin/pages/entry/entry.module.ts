import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryRoutingModule } from './entry-routing.module';
import { Entry } from './entry';


@NgModule({
  declarations: [
    Entry
  ],
  imports: [
    CommonModule,
    EntryRoutingModule
  ]
})
export class EntryModule { }
