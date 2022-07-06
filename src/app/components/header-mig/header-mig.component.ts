import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-mig',
  templateUrl: './header-mig.component.html',
  styleUrls: ['./header-mig.component.css']
})
export class HeaderMigComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }
  public selectLanguage(event: any){
    this.translate.use(event.target.value);
  }

}
