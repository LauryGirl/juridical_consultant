import { Component, OnInit } from '@angular/core';
import { Home } from '../home';
import { HomeService } from '../home.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/login/login.service';

@Component({
  selector: 'app-home-features',
  templateUrl: './home-features.component.html',
  styleUrls: ['./home-features.component.css']
})
export class HomeFeaturesComponent implements OnInit {

  feature$!: Observable<Home[]>;
  selectedFeature= '';

  constructor(private homeService: HomeService, private route: ActivatedRoute, public translate: TranslateService, public userService: UserService) {
    this.translate.use('es-ES');
  }

  ngOnInit(): void {
    /*
    this.feature$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedFeature = params.get('feature')!;
        return this.homeService.getFeatures();
      })
    )
    this.getUserLogged();
    */
  }

  getUserLogged() {
    this.userService.getUser().subscribe(user => {
      console.log(user);
    });
  }

}
