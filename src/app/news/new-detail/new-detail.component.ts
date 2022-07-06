import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NewService } from '../new.service';
import { New } from '../new';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.css']
})
export class NewDetailComponent implements OnInit {

  new_$!: Observable<New>;

  constructor(private route: ActivatedRoute, private router: Router, private service: NewService) { }

  ngOnInit(): void {
    this.new_$ = this.route.paramMap.pipe(
      switchMap((params:ParamMap) =>
        this.service.getNew(params.get('id')!))
    );
  }

  gotoNews(){
    this.router.navigate(['/news']);
  }
}
