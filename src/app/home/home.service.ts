import { Injectable } from '@angular/core';
import { Home } from './home';
import { FEATURES } from './features-list';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getFeatures(): Observable<Home[]>{
    const feats = of(FEATURES);
    return feats;
  }

  getFeature(feature: string): Observable<Home>{
    return this.getFeatures().pipe(map((features:Home[]) => features.find(feat => feat.feature === feature)!)
    );
  }
}
