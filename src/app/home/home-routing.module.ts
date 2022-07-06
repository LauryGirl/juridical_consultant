import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFeaturesComponent } from './home-features/home-features.component';
import { FeatureDetailsComponent } from './feature-details/feature-details.component';

const homeRoutes: Routes = [
  {path: 'home', component: HomeFeaturesComponent, data: {Animation:'home__'}},
  {path: 'home/:feature', component: FeatureDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
