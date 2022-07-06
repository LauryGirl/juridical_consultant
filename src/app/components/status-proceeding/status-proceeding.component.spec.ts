import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusProceedingComponent } from './status-proceeding.component';

describe('StatusProceedingComponent', () => {
  let component: StatusProceedingComponent;
  let fixture: ComponentFixture<StatusProceedingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusProceedingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusProceedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
