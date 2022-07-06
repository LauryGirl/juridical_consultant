import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotarialDetailsComponent } from './notarial-details.component';

describe('NotarialDetailsComponent', () => {
  let component: NotarialDetailsComponent;
  let fixture: ComponentFixture<NotarialDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotarialDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotarialDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
