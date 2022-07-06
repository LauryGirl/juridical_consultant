import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotarialComponent } from './notarial/notarial.component';
import { NotarialDetailsComponent } from './notarial-details/notarial-details.component';

const notarialRoutes: Routes = [
  {path: 'notarials', component: NotarialComponent, data: {Animation: 'notarials__'}},
  {path: 'notarial/:id', component: NotarialDetailsComponent, data: {Animation: 'notarials__'}}
];

@NgModule({
  imports: [RouterModule.forChild(notarialRoutes)],
  exports: [RouterModule]
})
export class NotarialRoutingModule { }
