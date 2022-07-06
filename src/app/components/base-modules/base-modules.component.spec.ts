import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseModulesComponent } from './base-modules.component';

describe('BaseModulesComponent', () => {
  let component: BaseModulesComponent;
  let fixture: ComponentFixture<BaseModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
