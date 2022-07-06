import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpusAssComponent } from './corpus-ass.component';

describe('CorpusAssComponent', () => {
  let component: CorpusAssComponent;
  let fixture: ComponentFixture<CorpusAssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorpusAssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpusAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
