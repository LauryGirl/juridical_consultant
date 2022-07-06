import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MigrantProceedingComponent } from './migrant-proceeding/migrant-proceeding.component';
import { ProceedingDetailsComponent } from './proceeding-details/proceeding-details.component';

const procRoutes: Routes = [
  {path:'migrant-proceedings', component: MigrantProceedingComponent, data:{Animation: 'proceeding__'}},
  {path:'migrant-proceeding/:id', component:ProceedingDetailsComponent, data:{Animation: 'proceeding__'}}
];

@NgModule({
  imports: [RouterModule.forChild(procRoutes)],
  exports: [RouterModule]
})
export class MigrantProceedingRoutingModule { }
