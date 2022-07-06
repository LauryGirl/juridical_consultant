import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-info-services',
  templateUrl: './info-services.component.html',
  styleUrls: ['./info-services.component.css']
})
export class InfoServicesComponent implements OnInit {
  
  myControl = new FormControl('');
  //optionsES: string[] = ['Uno', 'Dos', 'Tres'];
  //optionsUS: string[] = ['One', 'Two', 'Three'];
  options : string[] = ["Asistencia legal", "Notariales", "Tramites migratorios documentales"];
  //options !: string[];
  selected: string='';

  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  constructor(public translate: TranslateService) { 
    //console.log(this.translate.instant('services.legalAssistance'));
    //this.options = [this.translate.instant('services.legalAssistance'), this.translate.instant('services.notarial'), this.translate.instant('services.docImmigration')];
  }
}
