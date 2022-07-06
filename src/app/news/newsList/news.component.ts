import { Component, OnInit } from '@angular/core';
import { New } from '../new';
import { NewService } from '../new.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-news-list',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsListComponent implements OnInit {

  news$!: Observable<New[]>;
  selectedId = 0;

  constructor(private newService: NewService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.news$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.newService.getNews();
      })
    ); 
  }

  gotoHome(){
    this.router.navigate(['/home']);
  }
}
