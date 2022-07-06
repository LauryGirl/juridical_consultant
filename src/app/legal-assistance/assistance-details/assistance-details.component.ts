import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LegalAssistanceService } from '../legal-assistance.service';
import { LegalAssistance } from '../legal-assistance';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  message: string;
  tittle: string;
}


@Component({
  selector: 'app-assistance-details',
  templateUrl: './assistance-details.component.html',
  styleUrls: ['./assistance-details.component.css']
})


export class AssistanceDetailsComponent implements OnInit {

  assist$!: Observable<LegalAssistance>;

  constructor(private route: ActivatedRoute, private router: Router, private service: LegalAssistanceService, 
    public dialogRef: MatDialogRef<AssistanceDetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngOnInit(): void {
    this.assist$ = this.route.paramMap.pipe(
      switchMap((params:ParamMap) =>
        this.service.getAssistance(params.get('id')!))
    );

  }

  gotoAssistances(){
    this.router.navigate(['/legal-assistances']);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
