import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewDetailComponent } from './new-detail/new-detail.component';
import { NewsListComponent } from './newsList/news.component';

const newRoutes: Routes = [  
  {path: 'news', redirectTo: '/allNews'},
  {path:'new/:id', redirectTo: '/allNew/:id'},
  {path: 'allNews',  component: NewsListComponent, data: {Animation: 'news__'} },
  {path: 'allNew/:id', component: NewDetailComponent, data: {Animation: 'new__'} }];

@NgModule({
  imports: [RouterModule.forChild(newRoutes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
