import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardIndexComponent } from './admin-dashboard-index.component';

describe('AdminDashboardIndexComponent', () => {
  let component: AdminDashboardIndexComponent;
  let fixture: ComponentFixture<AdminDashboardIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
