import { Injectable } from '@angular/core';
import { MigrantProceeding } from './migrant-proceeding';
import { PROCEEDING } from './proceeding-list';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MigrantProceedingService {

  constructor() { }

  getProceedings(): Observable<MigrantProceeding[]>{
    const proceeding = of(PROCEEDING);
    return proceeding;
  }

  getProceeding(id: number | string): Observable<MigrantProceeding> {
    return this.getProceedings().pipe(map((procs:MigrantProceeding[]) => procs.find(proc => proc.id === +id)!)
    );
  }
}
