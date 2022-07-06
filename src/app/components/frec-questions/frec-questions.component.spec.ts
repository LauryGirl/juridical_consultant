import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrecQuestionsComponent } from './frec-questions.component';

describe('FrecQuestionsComponent', () => {
  let component: FrecQuestionsComponent;
  let fixture: ComponentFixture<FrecQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrecQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrecQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
