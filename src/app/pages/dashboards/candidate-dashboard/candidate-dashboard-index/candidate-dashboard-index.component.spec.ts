import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateDashboardIndexComponent } from './candidate-dashboard-index.component';

describe('CandidateDashboardIndexComponent', () => {
  let component: CandidateDashboardIndexComponent;
  let fixture: ComponentFixture<CandidateDashboardIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateDashboardIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateDashboardIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
