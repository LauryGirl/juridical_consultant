import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindRoutingModule } from './find-routing.module';
import { FindComponent } from './find/find.component';


@NgModule({
  declarations: [
    FindComponent
  ],
  imports: [
    CommonModule,
    FindRoutingModule
  ]
})
export class FindModule { }
