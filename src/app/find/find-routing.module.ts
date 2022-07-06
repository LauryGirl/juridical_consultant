import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindComponent } from './find/find.component';

const findRoutes: Routes = [
  {path:'find', component: FindComponent}
];

@NgModule({
  imports: [RouterModule.forChild(findRoutes)],
  exports: [RouterModule]
})
export class FindRoutingModule { }
