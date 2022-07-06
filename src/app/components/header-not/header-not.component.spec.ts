import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNotComponent } from './header-not.component';

describe('HeaderNotComponent', () => {
  let component: HeaderNotComponent;
  let fixture: ComponentFixture<HeaderNotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
