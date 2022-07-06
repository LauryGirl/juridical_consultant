import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-ass',
  templateUrl: './header-ass.component.html',
  styleUrls: ['./header-ass.component.css']
})
export class HeaderAssComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

  public selectLanguage(event: any){
    this.translate.use(event.target.value);
  }

}
