import { Component, OnInit } from '@angular/core';
import { MigrantProceeding } from '../migrant-proceeding';
import { MigrantProceedingService } from '../migrant-proceeding.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ProceedingDetailsComponent } from '../proceeding-details/proceeding-details.component';
import {PROCEEDING} from '../proceeding-list';

@Component({
  selector: 'app-migrant-proceeding',
  templateUrl: './migrant-proceeding.component.html',
  styleUrls: ['./migrant-proceeding.component.css']
})
export class MigrantProceedingComponent implements OnInit {

  proc$!: Observable<MigrantProceeding[]>;
  selectedId = 0;

  startId = 1;
  finishId = 10;

  tittleSelect = ""

  myControl = new FormControl('');
  options !: string[];
  selected: string='';

  filteredOptions!: Observable<string[]>;

  message!: string;


  constructor(private service: MigrantProceedingService, private router:Router, private route: ActivatedRoute, public dialog: MatDialog) { 
    this.options = []
    for( var i = 0; i < PROCEEDING.length; i++){
      this.options.push(PROCEEDING[i].tittle);
    };

  }

  ngOnInit(): void {
    this.proc$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getProceedings();
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
    
    for(var i = 0; i < PROCEEDING.length; i++){
      if(this.myControl.value == PROCEEDING[i].tittle){
        this.router.navigate(['/migrant-proceeding', PROCEEDING[i].id]);
        break;
      }
    };
  }

  routerAss__(a : any){
    //se asume q el id sea tambien el indice
    this.router.navigate(['/migrant-proceeding', a.id]);
  }

  changeStartId(){
    if (this.finishId < 10){
      this.startId += 1;
      this.finishId += 1;
    }
  }

  scrollTop(){
    window.scrollTo({ top: 0,left: 0,behavior: 'smooth'});
  }

  openDialog(t: string): void {
    const dialogRef = this.dialog.open(ProceedingDetailsComponent, {
      width: '509px',
      height: '601px',
      data: {tittle: t, message: this.message},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.message = result;
    });
  }

}
