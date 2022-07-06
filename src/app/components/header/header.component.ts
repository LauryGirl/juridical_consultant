import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  @Input() deviceXs!:boolean;
  constructor(public translate: TranslateService){
  }

  public selectLanguage(event: any){
    this.translate.use(event.target.value);
  }
}
