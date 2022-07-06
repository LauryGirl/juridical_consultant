import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMigComponent } from './header-mig.component';

describe('HeaderMigComponent', () => {
  let component: HeaderMigComponent;
  let fixture: ComponentFixture<HeaderMigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
