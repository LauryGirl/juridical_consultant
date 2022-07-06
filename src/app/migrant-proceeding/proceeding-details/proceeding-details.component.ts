import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MigrantProceedingService } from '../migrant-proceeding.service';
import { MigrantProceeding } from '../migrant-proceeding';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  message: string;
  tittle: string;
}

@Component({
  selector: 'app-proceeding-details',
  templateUrl: './proceeding-details.component.html',
  styleUrls: ['./proceeding-details.component.css']
})
export class ProceedingDetailsComponent implements OnInit {

  p$!: Observable<MigrantProceeding>;

  constructor(private route: ActivatedRoute, private router: Router, private service: MigrantProceedingService, public dialogRef: MatDialogRef<ProceedingDetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngOnInit(): void {
    this.p$ = this.route.paramMap.pipe(
      switchMap((params:ParamMap) =>
      this.service.getProceeding(params.get('id')!))

    )
  }

  gotoMigrantProceedings(){
    this.router.navigate(['/migrant-proceedings']);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
