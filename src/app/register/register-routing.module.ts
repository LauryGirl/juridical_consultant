import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const regRoutes: Routes = [
  {path: 'register', component: RegisterComponent, data: {Animation: 'register__'}}
];

@NgModule({
  imports: [RouterModule.forChild(regRoutes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
