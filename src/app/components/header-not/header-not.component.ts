import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-not',
  templateUrl: './header-not.component.html',
  styleUrls: ['./header-not.component.css']
})
export class HeaderNotComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }
  public selectLanguage(event: any){
    this.translate.use(event.target.value);
  }

}
