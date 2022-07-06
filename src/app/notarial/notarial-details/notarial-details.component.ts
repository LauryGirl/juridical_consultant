import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { Observable } from 'rxjs';
import { NotarialService } from '../notarial.service';
import { Notarial } from '../notarial';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  message: string;
  tittle: string;
}

@Component({
  selector: 'app-notarial-details',
  templateUrl: './notarial-details.component.html',
  styleUrls: ['./notarial-details.component.css']
})
export class NotarialDetailsComponent implements OnInit {

  notarial$!: Observable<Notarial>;

  constructor(private route: ActivatedRoute, private router: Router, private service: NotarialService, public dialogRef: MatDialogRef<NotarialDetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngOnInit(): void {
    this.notarial$ = this.route.paramMap.pipe(
      switchMap((params:ParamMap) =>
        this.service.getNotarial(params.get('id')!))
    );
  }

  gotoNotarials(){
    this.router.navigate(['/notarials']);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
