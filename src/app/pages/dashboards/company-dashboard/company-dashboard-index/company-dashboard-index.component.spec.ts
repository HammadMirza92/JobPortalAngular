import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDashboardIndexComponent } from './company-dashboard-index.component';

describe('CompanyDashboardIndexComponent', () => {
  let component: CompanyDashboardIndexComponent;
  let fixture: ComponentFixture<CompanyDashboardIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyDashboardIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyDashboardIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
