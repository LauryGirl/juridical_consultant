import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseNotComponent } from './base-not.component';

describe('BaseNotComponent', () => {
  let component: BaseNotComponent;
  let fixture: ComponentFixture<BaseNotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseNotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
