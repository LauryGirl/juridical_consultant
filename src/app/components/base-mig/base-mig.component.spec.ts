import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseMigComponent } from './base-mig.component';

describe('BaseMigComponent', () => {
  let component: BaseMigComponent;
  let fixture: ComponentFixture<BaseMigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseMigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseMigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
