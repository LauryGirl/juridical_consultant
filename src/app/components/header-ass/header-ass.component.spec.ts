import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAssComponent } from './header-ass.component';

describe('HeaderAssComponent', () => {
  let component: HeaderAssComponent;
  let fixture: ComponentFixture<HeaderAssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
