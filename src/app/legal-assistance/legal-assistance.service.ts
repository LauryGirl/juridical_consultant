import { Injectable } from '@angular/core';
import { LegalAssistance } from './legal-assistance';
import { ASSISTANCES } from './assistance-list';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LegalAssistanceService {

  constructor() { }

  getAssistances(): Observable<LegalAssistance[]>{
    const assists = of(ASSISTANCES);
    return assists;
  }

  getAssistance(id: number | string): Observable<LegalAssistance>{
    return this.getAssistances().pipe(map((assists:LegalAssistance[]) => assists.find(assist => assist.id === +id)!)
    );
  }
}
