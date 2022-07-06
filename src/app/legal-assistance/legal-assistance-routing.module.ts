import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalAssistantComponent } from './legal-assistant/legal-assistant.component';
import { AssistanceDetailsComponent } from './assistance-details/assistance-details.component';

const assistanceRoutes: Routes = [
  {path:'legal-assistances', component: LegalAssistantComponent},
  {path: 'legal-assistance/:id', component:AssistanceDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(assistanceRoutes)],
  exports: [RouterModule]
})
export class LegalAssistanceRoutingModule { }
