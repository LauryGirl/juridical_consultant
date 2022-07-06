import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchsInfoComponent } from './branchs-info.component';

describe('BranchsInfoComponent', () => {
  let component: BranchsInfoComponent;
  let fixture: ComponentFixture<BranchsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
