import { Component, OnInit, Inject } from '@angular/core';
import { LegalAssistance } from '../legal-assistance';
import { LegalAssistanceService } from '../legal-assistance.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {ASSISTANCES} from '../assistance-list';
import {MatDialog} from '@angular/material/dialog';
import { AssistanceDetailsComponent } from '../assistance-details/assistance-details.component';

@Component({
  selector: 'app-legal-assistant',
  templateUrl: './legal-assistant.component.html',
  styleUrls: ['./legal-assistant.component.css']
})
export class LegalAssistantComponent implements OnInit {

  assists$!: Observable<LegalAssistance[]>;
  selectedId = 0;

  startId = 1;
  finishId = 12;

  tittleSelect = ""

  myControl = new FormControl('');
  options !: string[];
  selected: string='';

  filteredOptions!: Observable<string[]>;

  message!: string;

  constructor(private service: LegalAssistanceService, private router: Router, private route: ActivatedRoute, public dialog: MatDialog) { 
    this.options = []
    for( var i = 0; i < ASSISTANCES.length; i++){
      this.options.push(ASSISTANCES[i].tittle);
    };
  }

  ngOnInit(): void {
    this.assists$ =  this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getAssistances();
      })
    ); 

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  gotoHome(){
    this.router.navigate(['/home']);
  }

  routerAss(){
    console.log(this.myControl.value);
    
    for(var i = 0; i < ASSISTANCES.length; i++){
      if(this.myControl.value == ASSISTANCES[i].tittle){
        this.router.navigate(['/legal-assistance', ASSISTANCES[i].id]);
        break;
      }
    };
  }

  routerAss__(a : any){
    //se asume q el id sea tambien el indice
    this.router.navigate(['/legal-assistance', a.id]);
  }

  changeStartId(){
    if (this.startId < 2 && this.finishId < 13){
      this.startId += 1;
      this.finishId += 1;
    }
  }

  scrollTop(){
    window.scrollTo({ top: 0,left: 0,behavior: 'smooth'});
  }

  openDialog(t: string): void {
    const dialogRef = this.dialog.open(AssistanceDetailsComponent, {
      width: '509px',
      height: '601px',
      maxHeight:'100%',
      data: {tittle: t, message: this.message},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.message = result;
    });
  }
}
