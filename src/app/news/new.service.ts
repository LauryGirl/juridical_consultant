import { Injectable } from '@angular/core';
import { New } from './new';
import { NEWS } from './mock-news';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor() { }

  getNews(): Observable<New[]>{
    const news = of(NEWS);
    return news;
  }

  getNew(id: number | string): Observable<New> {
    return this.getNews().pipe(map((news:New[]) => news.find(new_ => new_.id === +id)!)
    );
  }
}
