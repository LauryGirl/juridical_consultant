import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrantProceedingComponent } from './migrant-proceeding.component';

describe('MigrantProceedingComponent', () => {
  let component: MigrantProceedingComponent;
  let fixture: ComponentFixture<MigrantProceedingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigrantProceedingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrantProceedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
