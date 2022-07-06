import { Component, OnInit } from '@angular/core';
import { Notarial } from '../notarial';
import { NotarialService } from '../notarial.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { NotarialDetailsComponent } from '../notarial-details/notarial-details.component';
import { NOTARIALS } from '../notarial-list';

@Component({
  selector: 'app-notarial',
  templateUrl: './notarial.component.html',
  styleUrls: ['./notarial.component.css']
})
export class NotarialComponent implements OnInit {

  notarial$!: Observable<Notarial[]>;
  selectedId = 0;

  startId = 1;
  finishId = 10;

  tittleSelect = ""

  myControl = new FormControl('');
  options !: string[];
  selected: string='';

  filteredOptions!: Observable<string[]>;

  message!: string;

  constructor(private service: NotarialService, private router: Router, private route: ActivatedRoute, public dialog: MatDialog) { 
    this.options = []
    for( var i = 0; i < NOTARIALS.length; i++){
      this.options.push(NOTARIALS[i].tittle);
    };

  }

  ngOnInit(): void {
    this.notarial$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getNotarials();
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
    
    for(var i = 0; i < NOTARIALS.length; i++){
      if(this.myControl.value == NOTARIALS[i].tittle){
        this.router.navigate(['/notarial', NOTARIALS[i].id]);
        break;
      }
    };
  }

  routerAss__(a : any){
    //se asume q el id sea tambien el indice
    this.router.navigate(['/notarial', a.id]);
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
    const dialogRef = this.dialog.open(NotarialDetailsComponent, {
      width: '509px',
      height: '850px',
      data: {tittle: t, message: this.message},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.message = result;
    });
  }
}
