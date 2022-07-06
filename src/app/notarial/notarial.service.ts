import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs';
import { Notarial } from './notarial';
import { NOTARIALS } from './notarial-list';

@Injectable({
  providedIn: 'root'
})
export class NotarialService {

  constructor() { }

  getNotarials(): Observable<Notarial[]>{
    const notarials = of(NOTARIALS);
    return notarials;
  }

  getNotarial(id: number | string): Observable<Notarial>{
    return this.getNotarials().pipe(map((notarials : Notarial[]) => notarials.find(notarial => notarial.id === +id)!)
    );
  }
}
