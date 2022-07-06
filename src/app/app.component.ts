import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Work1';
  mediaSub!: Subscription;
  deviceXs!: boolean;

  constructor(public mediaObserver: MediaObserver){

  }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange) =>{
      console.log(result.mqAlias);

      this.deviceXs = result.mqAlias == 'xs' ? true : false;
    })
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

}
