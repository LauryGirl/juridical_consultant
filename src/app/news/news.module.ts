import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { NewDetailComponent } from './new-detail/new-detail.component';
import { NewsListComponent } from './newsList/news.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    NewDetailComponent,
    NewsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    NewsRoutingModule
  ]
})

export class NewsModule { }
